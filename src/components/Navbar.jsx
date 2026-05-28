import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../slices/CartSlice";
import { setSearchTerm } from "../slices/ProductSlice";

import {
  FaCartPlus,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useState, useEffect } from "react";
import axios from "axios";

import lakshmi from "../../src/assets/Image/lakshmi.jpg";
import "../Navbar.css";

function Navbar() {
  const dispatch = useDispatch();

  /* REDUX */
  const searchTerm = useSelector(
    (state) => state?.Product?.searchTerm || ""
  );

  const cartItem = useSelector(
    (state) => state?.Cart?.cartItem || []
  );

  /* LOCAL PRODUCTS (API) */
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

  /* MOBILE MENU */
  const [menuOpen, setMenuOpen] = useState(false);

  /* FILTER PRODUCTS */
const filteredProducts = (products || [])
  .filter((item) => {
    const title = String(item?.Title || "")
      .toLowerCase()
      .trim();

    const category = String(item?.Category || "")
      .toLowerCase()
      .trim();

    const search = String(searchTerm || "")
      .toLowerCase()
      .trim();

    return (
      title.includes(search) ||
      category.includes(search)
    );
  })
  .slice(0, 20);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbarContainer">
      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* TOP NAVBAR */}
      <div className="topNavbar">
        {/* LOGO */}
        <div className="logoSection">
          <img
            src={lakshmi}
            alt="Lakshmi Law House"
            className="logoImage"
          />
          <a
            href="http://www.lakshmilawhouse.com/"
            className="logoText"
          >
            Lakshmi Law House
          </a>
        </div>

        {/* SEARCH */}
        <div className="searchWrapper">
          <div className="searchBox">
            <FaSearch className="searchIcon" />

            <input
              type="text"
              placeholder="Search products..."
              className="searchInput"
              value={searchTerm}
              onChange={(e) =>
                dispatch(setSearchTerm(e.target.value))
              }
            />
          </div>

          {/* SEARCH RESULTS */}
          {searchTerm?.trim() && (
            <div className="searchResults">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    className="searchNameItem"
                    onClick={() =>
                      dispatch(setSearchTerm(""))
                    }
                  >
                    {item.Title}
                  </Link>
                ))
              ) : (
                <p className="noResult">
                  No Product Found
                </p>
              )}
            </div>
          )}
        </div>

        {/* RIGHT SECTION */}
        <div className="rightSection">
          {/* CART */}
          <div
            className="cartSection"
            onClick={() => dispatch(toggleCart())}
          >
            <FaCartPlus className="cartIcon" />
            <span className="cartCount">
              {cartItem.length}
            </span>
          </div>

          {/* MENU BUTTON */}
          <button
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* BOTTOM NAVBAR */}
      <div
        className={
          menuOpen
            ? "bottomNavbar active"
            : "bottomNavbar"
        }
      >
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <div className="dropdown">
          <span>Bookstore</span>
          <div className="dropdownContent">
            <Link to="/AcademicBooks" onClick={closeMenu}>
              Academic Books
            </Link>
            <Link
              to="/ProfessionalBooks"
              onClick={closeMenu}
            >
              Professional Books
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <span>Our Products</span>
          <div className="dropdownContent">
            <Link to="/Commonseal" onClick={closeMenu}>
              Common Seal
            </Link>
            <Link to="/Minutessheet" onClick={closeMenu}>
              Minutes Sheets
            </Link>
            <Link to="/Minutesbook" onClick={closeMenu}>
              Minutes Book
            </Link>
            <Link to="/Minutesbinder" onClick={closeMenu}>
              Minutes Binder
            </Link>
            <Link to="/Share" onClick={closeMenu}>
              Share Certificate
            </Link>
            <Link to="/Combined" onClick={closeMenu}>
              Statutory Register
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <span>Software</span>
          <div className="dropdownContent">
            <Link to="/Etds" onClick={closeMenu}>
              ETDS Software
            </Link>
            <Link to="/Xbrl" onClick={closeMenu}>
              XBRL Software
            </Link>
            <Link to="/Gst" onClick={closeMenu}>
              GST Software
            </Link>
            <Link to="/Payroll" onClick={closeMenu}>
              Payroll Software
            </Link>
            <Link to="/Pdfsigner" onClick={closeMenu}>
              PDFSigner Software
            </Link>
            <Link to="/FixedAsset" onClick={closeMenu}>
              FixedAsset Management
            </Link>
          </div>
        </div>

        <Link to="/DigitalSignature" onClick={closeMenu}>
          Digital Signature
        </Link>

        <Link to="/AboutUs" onClick={closeMenu}>
          About Us
        </Link>

        <Link
          to="/Login"
          className="loginBtn"
          onClick={closeMenu}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;