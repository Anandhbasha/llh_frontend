import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import { useState } from "react";
import "../ProductPage.css"
import { addtoCart } from "../Slices.js/CartSlice";

const ProductPage = () => {
  const products = useSelector((state) => state.Product.Products);

  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="Serachbar">
      <SearchBar onSearch={setQuery} />
      {query !== "" &&
        products
          .filter((item) =>
            item.Title.toLowerCase().includes(query.toLowerCase())
          )
          .map((item) => (
            <p
              key={item.id}
              onClick={() => setSelectedProduct(item)}
              style={{ cursor: "pointer", color: "white",fontSize:"20px",fontFamily:"cursive",fontWeight:"700" }}
            >
              {item.Title}
            </p>
          ))}

      {/* 📦 Selected Product Card */}
      {selectedProduct && (
        <div
          style={{
            marginRight:"100px",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "10px",
            color: "white",
            width: "100%",
            alignItems:'center'
          }}
        >
          <h2 style={{fontSize:"32px"}}>{selectedProduct.Title}</h2>
          <p>Price: ₹{selectedProduct.Price}</p>
          <p>Category: {selectedProduct.Category}</p>
          <div style={{textAlign:"center"}}>
          <img
            src={selectedProduct.Image}
            alt={selectedProduct.Title}
            width="300"

          />
          <button onClick={()=>selectedProduct(addtoCart)}>
                Add To Cart
              </button>
        </div>
        
        </div>
      )}
    </div>
  );
};

export default ProductPage;