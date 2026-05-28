import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import axios from 'axios';

const Etds = () => {
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
    const etds=products.filter((item)=>item.Category==="Etds software")
  return (
    <div >
        <div style={{fontFamily:"emoji",color:"white", paddingTop:"50px",textAlign:"center"}} >
          
    <div style={{display:"flex",flexWrap:"wrap",color:"white",marginLeft:"80px",gap:'60px'}}>
      
      {etds.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

               </div>

               

</div>
        </div>
        
  )
}

export default Etds