import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Minutesbinder = () => {
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
  const binder = products.filter((item) => item.Category === "Minutes Binder");
  return (
    <div className="bg">
      {binder.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Minutesbinder;
