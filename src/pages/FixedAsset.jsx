import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import axios from "axios";

const FixedAsset = () => {
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
  const etds = products.filter(
    (item) => item.Category === "Fixed Asset software",
  );
  return (
    <div>
      <div
        style={{
          paddingTop: "50px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          {etds.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FixedAsset;
