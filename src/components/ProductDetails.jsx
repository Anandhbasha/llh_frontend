import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addtoCart } from "../slices/CartSlice";
import "../ProductPage.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [showMore, setShowMore] = useState(false);

  /* FETCH PRODUCT */
  useEffect(() => {
    axios
      .get(`https://llh-backend.onrender.com/products`)
      .then((res) => {
        const found = res.data.find((item) => item.id === Number(id));
        setProduct(found);
      })
      .catch((err) => console.log(err));
  }, [id]);

  /* LOADING CHECK */
  if (!product) {
    return <h2 className="notFound">Loading... ⏳</h2>;
  }

  const price = Number(product.Price);

  /* BOOK DISCOUNT */
  const discountPrice = Math.round(price - (price * 15) / 100);

  /* SOFTWARE GST */
  const gstPrice = Math.round(price + (price * 18) / 100);

  return (
    <div className="productDetailsPage">
      {/* IMAGE */}
      {/* IMAGE */}
      <div className="productImageSection">
        <img
          src={product.Image} //  Pass directly without repeating localhost!
          alt={product.Title}
          className="detailsImage"
        />
      </div>

      {/* INFO */}
      <div className="productInfoSection">
        {/* TITLE */}
        <h1 className="detailsTitle">{product.Title}</h1>

        {/* BOOK PRICE */}
        {product.type === "book" && (
          <div className="priceBox">
            <span
              style={{
                textDecoration: "line-through",
                color: "white",
                fontSize: "18px",
              }}
            >
              Actual Price: ₹{product.Price}
            </span>

            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "28px",
                marginTop: "10px",
                display: "block",
              }}
            >
              15% Discount: ₹{discountPrice}
            </span>
          </div>
        )}

        {/* SOFTWARE PRICE */}
        {product.type === "software" && (
          <div className="priceBox">
            <span style={{ color: "white" }}>
              Actual Price: ₹{product.Price}
            </span>

            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "28px",
                marginTop: "10px",
                display: "block",
              }}
            >
              Including GST (18%): ₹{gstPrice}
            </span>
          </div>
        )}

        {/* CATEGORY / TAX */}
        <p className="detailsTax">{product.Category}</p>

        {/* DESCRIPTION */}
        <div className="descriptionBox">
          <h3>Description</h3>

          <p>
            {showMore
              ? product.Description
              : product.Description.slice(0, 120) + "..."}

            <span
              onClick={() => setShowMore(!showMore)}
              style={{
                color: "orange",
                cursor: "pointer",
                marginLeft: "5px",
                fontWeight: "bold",
              }}
            >
              {showMore ? "Less" : "More"}
            </span>
          </p>
        </div>

        {/* ADD TO CART */}
        <button
          className="detailsBtn"
          onClick={() => dispatch(addtoCart(product))}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
