import { useDispatch } from "react-redux";
import { addtoCart } from "../slices/CartSlice";
import { useNavigate } from "react-router";

const Card = ({
  id,
  Title,
  Price,
  Image,
  Category,
  Description,
  type,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.stopPropagation();

    dispatch(
      addtoCart({
        id,
        Title,
        Price,
        Category,
        Image,
        Description,
        type,
      })
    );
  };

  // ✅ SAFE IMAGE HANDLING
const imageSrc = Image || "https://via.placeholder.com/150";

  // BOOK DISCOUNT
  const discountPrice = Math.round(Price - (Price * 15) / 100);

  // SOFTWARE GST
  const gstPrice = Math.round(Price + (Price * 18) / 100);
  console.log(Image)
  return (
    <div className="Card" onClick={() => navigate(`/product/${id}`)}>

      {/* IMAGE */}
      <div className="cardBtm">
        <img src={imageSrc} alt={Title} />
      </div>

      {/* CONTENT */}
      <div className="cardBtm">
        <p>{Title}</p>

        {/* BOOK */}
        {type === "book" && (
          <div>
            <span style={{ textDecoration: "line-through" }}>
              ₹{Price}
            </span><br></br>
            <span style={{ color: "green", fontWeight: "bold" }}>
              Discount Price :₹{discountPrice}
            </span>
          </div>
        )}

        {/* SOFTWARE */}
        {type === "software" && (
          <div>
            <span>₹{Price}</span><br></br><br></br>
            <small>With</small>
            <span style={{ color: "orangered", fontWeight: "bold" ,padding:"10px"}}>
               Gst₹{gstPrice}
            </span>
          </div>
        )}

        {/* OTHERS */}
        {type === "others" && (
          <div>
            <span>₹{Price}</span>
          </div>
        )}

        {/* BUTTON */}
        <button
          onClick={handleAdd}
          style={{
            backgroundColor: "rgb(234 89 12)",
            color: "white",
            borderRadius: "30px",
            padding: "10px 18px",
            border: "none",
            marginTop: "12px",
            cursor: "pointer",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;