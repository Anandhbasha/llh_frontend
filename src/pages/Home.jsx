import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Card from "../components/Card";
import Slider from "../components/Slider";
import Bounce from "../components/Bounce";

import "../App.css";
import ScrollTopButton from "../components/ScrollTopButton";
import Ours from "../components/Ours";
import axios from "axios";
import video from "../assets/Videos/tdsman.mp4";
import TypeText from "../components/TypeText";

const Home = () => {
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
  console.log(products);

  const latestProducts = products.slice(-12).reverse();

  const [visibleCount, setVisibleCount] = useState(0);
  console.log("VIDEO URL:", products[0]?.Video);
  const navigate = useNavigate();

  useEffect(() => {
    if (!products.length) return;

    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= 12) {
          clearInterval(interval);
          return prev;
        }
        return prev + 2;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="homePage">
      <title className="bannerTitle">Lakshmi Law House</title>
      <meta
        name="description"
        content="Best online LawBooks and software website "
      />

      <meta
        name="keywords"
        content="Law Books,etds software,Xbrl software,payroll software,common seal,Digital Signature,share Certificate, Combine registerMinutes Binder, Minutes Book, Minutes Sheets"
      />

      {/* SLIDER */}
      <div className="sliderSection">
        <Slider />
      </div>

      {/* NEW ARRIVALS */}
      <div className="arrivalSection">
        <h1 className="arrivalTitle">New Arrivals</h1>

        <div className="booksContainer">
          {latestProducts.slice(0, visibleCount).map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>

        {/* BUTTON */}
        <div className="moreBtnSection">
          <button className="moreBtn" onClick={() => navigate("/Books")}>
            Click Here For More Books
          </button>
        </div>
      </div>

      {/* SOFTWARE SECTION */}
      <div className="softwareSection">
        <h1 className="softwareTitle">TDSMAN ETDS Software</h1>

        <p className="softwareText">
          Everything you need for error-free TDS/TCS compliance.
        </p>

        <div className="videoContainer">
          {video && (
            <video controls autoPlay muted loop className="softwareVideo">
              <source src={video} type="video/mp4" />
            </video>
          )}
        </div>
        <Bounce />
      </div>
      <div>
        <div>
          <TypeText />
        </div>

        <Ours />
      </div>
    </div>
  );
};

export default Home;
