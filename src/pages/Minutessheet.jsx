import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Minutessheet = () => {
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
  const minutes = products.filter((item) => item.Category === "Minutes Sheet");
  return (
    <div className="bg">
      {minutes.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Minutessheet;
