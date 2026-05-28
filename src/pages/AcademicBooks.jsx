import { useSelector } from 'react-redux'
import Card from '../components/Card'
import axios from 'axios';
import { useEffect, useState } from 'react';

const AcademicBooks= () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
  axios
    .get(`${import.meta.env.VITE_API_URL}/products`)

    .then((res) => {

      setProducts(res.data);

    })

    .catch((err) => {

      console.log(err);

    });

}, []);
    const Digi = Array.isArray(products)
  ? products.filter((item) => item.Category === "Academic Books")
  : [];
    
 return (
    <div className='AcademicBooks'style={{paddingTop:"80px",display:"flex"}}>
      {Digi.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default AcademicBooks