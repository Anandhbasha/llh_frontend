import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import axios from "axios";

const Gst = () => {
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
  const gst = products.filter((item) => item.Category === "Gst software");
  return (
    <div>
      <div
        style={{
          fontFamily: "emoji",
          color: "white",
          paddingTop: "50px",
          textAlign: "center",
          marginLeft: "300px",
          gap: "80px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", color: "white" }}>
          {gst.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gst;
