import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Payroll = () => {
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
  const payroll = products.filter(
    (item) => item.Category === "Payroll software",
  );
  return (
    <div>
      <div className="softwareSection">
        <h1 className="softwareTitle">Sensys HRMthread Software</h1>

        <p className="softwareText">
          Payroll Processing, Time & Attendance, Claim & Reimbursement, TDS &
          Tax Planner, Recruitment, Performance (PMS), Training, Employee Self
          Service (ESS), and Mobile App to provide quick & easy access.
        </p>

        <div className="videoContainer">
          <video controls autoPlay muted loop className="softwareVideo">
            <source src="/sensys.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        style={{
          fontFamily: "emoji",
          color: "white",
          paddingTop: "50px",
          textAlign: "center",
          background: "linear-gradient(to right,#1e293b,#0f172a)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {payroll.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Payroll;
