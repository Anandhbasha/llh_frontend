import { useEffect, useState } from "react";
import Card from "../components/Card"
import { useSelector } from "react-redux"

const Combined= () => {
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
    const reg=products.filter((item)=>item.Category==="Statutory combined register")
 return (
    <div style={{display:"flex",justifyContent:"center",height:"600",paddingTop:"100px"}}>
      {reg.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default Combined