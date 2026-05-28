import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Card from "./Card";

const DigitalSignaturePage = () => {
  const text =
    "We are providing Digital Signature Services for Individuals, Companies as well as NRI individuals";

  const [displayText, setDisplayText] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const [products, setProducts] = useState([]);

  const typeRef = useRef(null);

  // Scroll trigger for typing section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartTyping(true);
      },
      { threshold: 0.2 }
    );

    if (typeRef.current) observer.observe(typeRef.current);

    return () => observer.disconnect();
  }, []);

  // Typing effect
  useEffect(() => {
    if (!startTyping) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i + 1));
      i++;

      if (i > text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [startTyping]);

  // Products API
  useEffect(() => {
    axios
      .get("https://llh-backend.onrender.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
console.log(products);

  return (
    <div className="container py-5">

      {/* ================= TYPE TEXT SECTION ================= */}
      <section ref={typeRef} className="mb-5">
        <h1 className="text-warning text-start mb-4">
          {displayText}
        </h1>

       <div className="row justify-content-center my-4">
  <div className="col-md-7">

    <div className="text-center mb-4">
      <h3 className="fw-bold text-primary">
        Who needs Digital Signature?
      </h3>
      <p className="text-muted">
        A Digital Signature is needed by individuals and organizations for secure online verification and filing.
      </p>
    </div>

    <div className="card shadow-sm border-0">
      <div className="card-body p-0">

        <ul className="list-group list-group-flush text-center">
          <li className="list-group-item py-3">Income Tax e-Filing</li>
          <li className="list-group-item py-3">MCA e-Filing</li>
          <li className="list-group-item py-3">e-Tendering</li>
          <li className="list-group-item py-3">DGFT / Import Export</li>
          <li className="list-group-item py-3">EPFO Transactions</li>
          <li className="list-group-item py-3">GST Filing</li>
          <li className="list-group-item py-3">IPR Protection</li>
          <li className="list-group-item py-3">ICEGATE Customs</li>
        </ul>

      </div>
    </div>

  </div>
</div>
      </section>

      {/* ================= OUR PRODUCTS SECTION ================= */}
      <section className="mt-5">
        <h2 className="text-center mb-4">Our Products</h2>

        <div className="row" style={{justifyContent:"center"}}>
          {products.slice(0, 6).map((item) => (
              <Card {...item} />
))}
        </div>
      </section>

    </div>
  );
};

export default DigitalSignaturePage;