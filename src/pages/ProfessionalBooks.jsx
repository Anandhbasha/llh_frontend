import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import axios from 'axios';

const ProfessionalBooks = () => {

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
  const [visibleCount, setVisibleCount] = useState(1)

  // FILTER PRODUCTS FIRST
  const Digi = products.filter(
    (item) => item.Category === "Professional Books"
  )

  // ANIMATION LOGIC
  useEffect(() => {

    setVisibleCount(1)

    const interval = setInterval(() => {

      setVisibleCount((prev) => {

        if (prev >= Digi.length) {
          clearInterval(interval)
          return prev
        }

        return prev + 1
      })

    }, 1000)

    return () => clearInterval(interval)

  }, [Digi.length])

  return (
    <div
      className='ProfessionalBooks'
      style={{
        paddingTop: "80px",
        paddingLeft: "120px",
        display: "flex",
        flexWrap: "wrap",
        gap: "40px"
      }}
    >

      {Digi.slice(0, visibleCount).map((item) => (
        <Card
          key={item.id}
          {...item}
        />
      ))}

    </div>
  )
}

export default ProfessionalBooks