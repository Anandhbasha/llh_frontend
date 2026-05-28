import React from "react";
import VisionMission from "../components/VisionMission";

const AboutUs = () => {
  const API = "http://localhost:5000";

  // Premium Corporate Font Colors - Multi-color gradient heading kku pathila nalla high-contrast readable colors
  const primaryTextColor = { color: "#1e293b", fontWeight: "600" }; // Dark Slate / Charcoal
  const secondaryTextColor = { color: "#475569", fontWeight: "400" }; // Muted Slate

  return (
    // Top-la navbar maraikaama iruka padding-top (pt-5 mt-5) add panni iruken da
    <div
      className="aboutus-page pt-5 mt-4"
      style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}
    >
      <div className="container py-4">
        {/* ================= CEO SECTION ================= */}
        <section className="row align-items-center mb-5 p-4 rounded-4 bg-white shadow-sm border border-light">
          <div className="col-md-4 d-flex justify-content-center mb-4 mb-md-0">
            <div className="p-2 border border-2 border-primary-subtle rounded-circle d-inline-block shadow-sm bg-white">
              <img
                src={`${API}/images/ceo.jpg`}
                alt="CEO"
                className="img-fluid rounded-circle"
                style={{
                  width: "280px",
                  height: "280px",
                  objectFit: "cover",
                  objectPosition: "center 0%",
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>

          <div className="col-md-8 text-center text-md-start">
            <span
              className="text-primary text-uppercase fw-bold tracking-wider small d-block mb-1"
              style={{ fontSize: "2em" }}
            >
              Our Leadership
            </span>
            <h1
              className="display-6 mb-3"
              style={{ fontWeight: "800", color:"rgb(234, 89, 12)" }}
            >
              R. Murali
            </h1>
            <p className="fs-5 mb-2 lh-base" style={primaryTextColor}>
              "Our vision is to provide excellent customer service and create a
              trusted shopping experience for everyone."
            </p>
            <p className="fs-6" style={secondaryTextColor}>
              We believe in innovation, customer satisfaction, and continuous
              growth.
            </p>
          </div>
        </section>

        {/* ================= OUR JOURNEY BRIEF ================= */}
        <section className=" my-5 p-5 bg-white rounded-4 shadow-sm border border-light">
          <span className="text-primary text-uppercase fw-bold tracking-wider small d-block mb-2 fs-1">
            Our History
          </span>
          <h2
            className="fs-5 lh-lg mb-0 text-dark"
            style={{ fontWeight: "600", color: "#1e293b" }}
          >
            We've started our journey of selling law books in{" "}
            <span className="text-primary fw-bold">1987</span>, <br />
            and since then everyday has been a day of progress and satisfaction.{" "}
            <br />
            We started with the business of commercial, taxation, legal, and CA,
            CS, CMA academic books. <br />
            As each passing day the valid demands of law related software also
            grew, <br />
            we started delivering the best digital services too.
          </h2>
        </section>

        {/* ================= IMAGE GALLERY (ABU) ================= */}
        <section className="row g-4 justify-content-center my-5">
          {["abu.webp", "abu1.webp", "abu2.webp", "abs3.webp"].map(
            (imgName, index) => (
              <div className="col-6 col-md-3" key={index}>
                <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden bg-white p-2 text-center hover-shadow">
                  <img
                    src={`${API}/images/${imgName}`}
                    className="img-fluid rounded"
                    alt="Gallery Item"
                    style={{
                      objectFit: "cover",
                      height: "180px",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            ),
          )}
        </section>

        {/* ================= CLIENTS TRUST ================= */}
        <section className="text-center my-5 px-3 max-width-md mx-auto">
          <div className="p-4 bg-primary-subtle rounded-4 border border-primary-subtle">
            <h3
              className="fs-5 lh-base text-primary-emphasis mb-0"
              style={{ fontWeight: "500" }}
            >
              Our elite clientele includes Chartered Accountants, Corporates,
              Company Secretaries, Advocates, Institutional Libraries,
              Government Departments, Attorney Firms, and Individual
              Professionals across Tamil Nadu and India. Most institutions and
              colleges have placed their complete trust with us for decades.
            </h3>
          </div>
        </section>

        {/* ================= CORPORATE ITEMS GALLERY ================= */}
        <section className="row g-4 justify-content-center my-5">
          {[
            { file: "seal.jpg", title: "Common Seal" },
            { file: "reg.jpg", title: "Statutory Combined Register" },
            { file: "share.jpg", title: "Share Certificate" },
          ].map((item, index) => (
            <div className="col-sm-6 col-md-4 text-center" key={index}>
              <div className="p-3 bg-white border border-light rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                <div
                  className="mb-3 d-flex align-items-center justify-content-center"
                  style={{ height: "220px" }}
                >
                  <img
                    src={`${API}/images/${item.file}`}
                    alt={item.title}
                    className="img-fluid rounded"
                    style={{ maxHeight: "220px", objectFit: "contain" }}
                  />
                </div>
                <h5 className="text-dark fw-semibold mb-0">{item.title}</h5>
              </div>
            </div>
          ))}
        </section>

        {/* ================= DIGITAL SIGNATURE SERVICES ================= */}
        <section className="text-center my-5 p-5 bg-white rounded-4 shadow-sm border border-light">
          <h2 className="fs-4 mb-4 text-dark" style={{ fontWeight: "600" }}>
            Moreover, it is a house of all types of statutory registers, forms,
            share certificates, <br />
            minutes, binders, & common seals. We provide professional{" "}
            <span className="text-primary fw-bold">
              Digital Signature Services
            </span>{" "}
            as well.
          </h2>
          <div className="my-4">
            <img
              src={`${API}/images/digi.webp`}
              alt="Digital Signature"
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxWidth: "100%", width: "500px", height: "auto" }}
            />
          </div>
          <h4 className=" fw-medium mt-3" style={{color:"#16a34a"}}>
            We welcome you to explore our website to learn more about our
            products and services.
          </h4>
        </section>

        {/* ================= MISSION & VALUES PANELS ================= */}
        <section className="row g-4 justify-content-center my-5">
          <div className="col-md-6">
            <div className="p-4 bg-white text-center rounded-4 border-start border-primary border-4 shadow-sm h-100 d-flex align-items-center">
              <p
                className="fs-5 lh-base mb-0 text-dark"
                style={{ fontWeight: "500" }}
              >
                🎯 <strong className="text-primary">Our Mission:</strong> To
                provide premium quality legal products with excellent customer
                service at highly affordable prices.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-white text-center rounded-4 border-start border-success border-4 shadow-sm h-100 d-flex align-items-center">
              <p
                className="fs-5 lh-base mb-0 text-dark"
                style={{ fontWeight: "500" }}
              >
                🤝 <strong className="text-success">Our Focus:</strong> Building
                trust, ensuring lightning-fast delivery, and maximizing customer
                satisfaction to make shopping seamless.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SUBCOMPONENT ================= */}
        <div className="mt-5 pt-4 border-top border-light">
          <VisionMission />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
