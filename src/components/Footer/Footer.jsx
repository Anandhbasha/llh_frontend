import { GoMail } from "react-icons/go";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";

import lakshmi from "../../assets/image/lakshmi.jpg";
import "./Footer.css";
import ScrollTopButton from "../ScrollTopButton";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        {/* BRAND SECTION (KEPT SAFE) */}
        <div className="footerBox brandBox">
          <img src={lakshmi} alt="Lakshmi Law House" className="footerLogo" />

          <h2>Lakshmi Law House</h2>

          <p>Trusted Law Books & Software Provider in Tamil Nadu</p>
        </div>

        {/* CONTACT SECTION */}
        <div className="footerBox">
          <h3>Contact Us</h3>

          <div className="footerItem">
            <IoLocationOutline className="icon" />
            <p>
              150, Kalidas Road, Ramnagar,
              <br />
              Coimbatore - 641009
            </p>
          </div>

          <div className="footerItem">
            <FaPhone className="icon" />
            <p>
              0422 2234199
              <br />
              8610697910
            </p>
          </div>

          <div className="footerItem">
            <GoMail className="icon" />
            <p>lakshmilaw2008@gmail.com</p>
          </div>

          <div className="footerItem">
            <IoTimeOutline className="icon" />
            <p>Mon - Sat : 10:00 AM - 7:30 PM</p>
          </div>
        </div>

        {/* WHATSAPP */}
        <a
          className="whatsappFloat"
          href="https://wa.me/919842223419"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
      {/* COPYRIGHT */}
      <div className="footerBottom">
        <p>
          © {new Date().getFullYear()} Lakshmi Law House. All Rights Reserved.
        </p>
      </div>
      <a
  className="whatsappFloat"
  href="https://wa.me/919842223419"
  target="_blank"
  rel="noreferrer"
>
  <FaWhatsapp />
</a>
<ScrollTopButton></ScrollTopButton>
    </footer>
  );
};

export default Footer;
