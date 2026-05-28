import asset from "../../src/assets/Image/asset.png";
import hrm from "../../src/assets/Image/hrm.jpg";
import payroll from "../../src/assets/Image/payroll.jpg";

import "../Banner.css";

const Banner1 = () => {

  return (

    <div className="banner1" >

      {/* LEFT CONTENT */}
      <div className="bannerContent" style={{marginLeft:"40px"}}>

        <h1 className="bannerTitle">
          Sensys
        </h1>

        <h3 className="bannerSubTitle">
          HRMTHREAD,
          Instant XBRL,<br/>
          PDF Signer Digital Signing of Form<br/>
          AssetThread
        </h3>

        <h3 className="bannerText">

          Comprehensive Software & AI Solutions for Every Business Need

        </h3>

       <p style={{fontSize:".8em"}}>
        Empower your business with smart, secure, and scalable software solutions — all under one roof!
Whether you’re looking for Payroll & HR Management, Cloud-based Payroll Software, TDS, XBRL, Fixed Asset Management, Digital Signature,
PDF Signer, Attendance Machine Integration, CRM, or Business Process Management, we’ve got you covered.


       </p>
      </div>

      {/* RIGHT IMAGES */}
      <div className="banner-image bannerBooks">

        <div className="bookCard">
          <img src={asset} alt="Fixed Asset software " />
        </div>

        <div className="bookCard">
          <img src={hrm} alt="HrmThread software" />
        </div>

        <div className="bookCard">
          <img src={payroll} alt="Payroll software" />
        </div>

      </div>

    </div>
  );
};

export default Banner1;