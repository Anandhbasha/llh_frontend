import { useSelector } from 'react-redux'
import Card from '../components/Card'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Books= () => {
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
    const Digi=products.filter((item)=>item.type==="book")
 return (
    <div className='Books'style={{paddingTop:"80px",display:"flex",marginLeft:"130px"}}>
      {Digi.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default Books