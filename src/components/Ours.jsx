import { useSelector } from "react-redux";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";

const Ours = () => {
const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")

      .then((res) => {
        setProducts(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  // First 5 products
  const firstFiveProducts = products.slice(0, 6);

  return (
    <div >
        <h1 style={{textAlign:"center",paddingTop:"60px"}}>Our Products</h1>
        <div style={{display:"flex",flexWrap:"wrap",marginLeft:"100px"}}>
      {firstFiveProducts.map((item) => (
         <Card
                key={item.id}
                {...item}
              />
         ))}
    </div>
    </div>
  );
};

export default Ours