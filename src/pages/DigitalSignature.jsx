import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { useEffect, useState } from 'react';
import axios from 'axios';

const DigitalSignature= () => {
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
    const Dig=products.filter((item)=>item.Category==="DigitalSignature")
 return (
    <div className='bg4'>
      {Dig.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default DigitalSignature