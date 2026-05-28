import td from "../../Backend/public/images/download.webp";

import "../Banner.css";

const Banner2 = () => {

  return (

    <div className="banner">

      {/* LEFT CONTENT */}
      <div className="bannerContent" style={{marginLeft:"40px"}}>

        <h1 className="bannerTitle">
          TDSMAN ETDS Software
        </h1>

        <h3 className="bannerSubTitle">
          Everything you need for
          error-free TDS/TCS compliance
        </h3>

        <p className="bannerText">

          Discover how TDSMAN simplifies
          compliance with smart workflows
          and the flexibility to work on
          Desktop or Cloud.

        </p>

        
      </div>

      {/* RIGHT IMAGE */}
      <div className="bannerImage">

        <img
          src={td}
          alt="TDS Software"
        />

      </div>

    </div>

  );
};

export default Banner2;