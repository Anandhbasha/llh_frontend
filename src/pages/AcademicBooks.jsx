import { useSelector } from 'react-redux'
import Card from '../components/Card'
import axios from 'axios';
import { useEffect, useState } from 'react';

const AcademicBooks= () => {
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
    const Digi=products.filter((item)=>item.Category==="Academic Books")
    console.log(Digi);
    
 return (
    <div className='AcademicBooks'style={{paddingTop:"80px",display:"flex"}}>
      {Digi.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default AcademicBooks