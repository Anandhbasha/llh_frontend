import { useEffect, useState } from "react";
import Card from "../components/Card"
import { useSelector } from "react-redux"
import axios from "axios";

const Commonseal= () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
  axios
    .get("https://llh-backend.onrender.com/products")

    .then((res) => {

      setProducts(res.data);

    })

    .catch((err) => {

      console.log(err);

    });

}, []);
    const Seal=products.filter((item)=>item.Category==="Commonseal")
 return (
    <div className='bg5'>
      {Seal.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default Commonseal