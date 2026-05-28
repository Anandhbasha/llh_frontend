import { useEffect, useState } from "react";
import Card from "../components/Card"
import axios from "axios";

const Xbrl= () => {
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
     console.log(products);

}, []);
    const sensys=products.filter((item)=>item.Category==="Xbrl software")
 return (
    <div className='bg3' style={{gap:"60px",paddingTop:'80px'}}>
      {sensys.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default Xbrl