import React, { useEffect, useState } from 'react'
import Card from "../components/Card"
import axios from 'axios';

const Share = () => {
  
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
    const Share=products.filter((item)=>item.Category==="Share Certificate")
 return (
    <div style={{display:"flex",justifyContent:"center",height:"600px",paddingTop:"80px"}}>
      {Share.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
 ) }

export default Share