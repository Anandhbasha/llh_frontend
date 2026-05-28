import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { useEffect, useState } from 'react';
import axios from 'axios';

const BareActs= () => {
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
    const Digi=products.filter((item)=>item.Category==="Bare Acts")
 return (
    <div className='BareActs'style={{paddingTop:"80px",display:"flex",background: "linear-gradient(#3e62cfc7, #770ae0)"}}>
      {Digi.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default BareActs