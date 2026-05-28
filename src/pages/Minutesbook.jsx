import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Minutesbook = () => {
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
  const minutes = products.filter((item) => item.Category === "Minutes Book");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "600px",
        paddingTop: "80px",
      }}
    >
      {minutes.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Minutesbook;
