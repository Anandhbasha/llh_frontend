import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { toggleCart } from "../slices/CartSlice";
import { setSearchTerm } from "../slices/ProductSlice";

import {
  FaCartPlus,
  FaSearch,
  FaBars,
  FaTimes
} from "react-icons/fa";

import { useState } from "react";

import lakshmi from "../../src/assets/Image/lakshmi.jpg";

import "../Navbar.css";

function Navbar() {

  const dispatch = useDispatch();

  /* REDUX */

  const {
    Products = [],
    searchTerm = ""
  } = useSelector((state) => state.Product || {});

  const cartItem =
    useSelector((state) => state?.Cart?.cartItem || []);

  /* MOBILE MENU */

  const [menuOpen, setMenuOpen] = useState(false);

  /* FILTER PRODUCTS */

  const filteredProducts = (Products || []).filter((item) =>

    item.Title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    ||

    item.Category
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

  ).slice(0, 5);

  /* CLOSE MENU */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <nav className="navbarContainer">

      {/* OVERLAY */}

      {
        menuOpen && (
          <div
            className="overlay"
            onClick={() => setMenuOpen(false)}
          ></div>
        )
      }

      {/* ================= TOP NAVBAR ================= */}

      <div className="topNavbar">

        {/* LOGO SECTION */}

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

        {/* SEARCH SECTION */}

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

          {
            searchTerm && (

              <div className="searchResults">

                {
                  filteredProducts.length > 0 ?

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

                    :

                    <p className="noResult">
                      No Product Found
                    </p>
                }

              </div>

            )
          }

        </div>

        {/* RIGHT SECTION */}

        <div className="rightSection">

          {/* CART */}

          <div
            className="cartSection"

            onClick={() =>
              dispatch(toggleCart())
            }
          >

            <FaCartPlus className="cartIcon" />

            <span className="cartCount">
              {cartItem.length}
            </span>

          </div>

          {/* MOBILE MENU */}

          <button
            className="menuButton"

            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            {
              menuOpen ?

                <FaTimes />

                :

                <FaBars />
            }

          </button>

        </div>

      </div>

      {/* ================= BOTTOM NAVBAR ================= */}

      <div
        className={
          menuOpen
            ? "bottomNavbar active"
            : "bottomNavbar"
        }
      >

        {/* HOME */}

        <Link
          to="/"
          onClick={closeMenu}
        >
          Home
        </Link>

        {/* BOOKSTORE */}

        <div className="dropdown">

          <span>Bookstore</span>

          <div className="dropdownContent">

            <Link
              to="/AcademicBooks"
              onClick={closeMenu}
            >
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

        {/* PRODUCTS */}

        <div className="dropdown">

          <span>Our Products</span>

          <div className="dropdownContent">

            <Link
              to="/Commonseal"
              onClick={closeMenu}
            >
              Common Seal
            </Link>

            <Link
              to="/Minutessheet"
              onClick={closeMenu}
            >
              Minutes Sheets
            </Link>

            <Link
              to="/Minutesbook"
              onClick={closeMenu}
            >
              Minutes Book
            </Link>

            <Link
              to="/Minutesbinder"
              onClick={closeMenu}
            >
              Minutes Binder
            </Link>

            <Link
              to="/Share"
              onClick={closeMenu}
            >
              Share Certificate
            </Link>

            <Link
              to="/Combined"
              onClick={closeMenu}
            >
              Statutory Register
            </Link>

          </div>

        </div>

        {/* SOFTWARE */}

        <div className="dropdown">

          <span>Software</span>

          <div className="dropdownContent">

            <Link
              to="/Etds"
              onClick={closeMenu}
            >
              ETDS Software
            </Link>

            <Link
              to="/Xbrl"
              onClick={closeMenu}
            >
              XBRL Software
            </Link>

            <Link
              to="/Gst"
              onClick={closeMenu}
            >
              GST Software
            </Link>

            <Link
              to="/Payroll"
              onClick={closeMenu}
            >
              Payroll Software
            </Link>

            <Link
              to="/Pdfsigner"
              onClick={closeMenu}
            >
              PDFSigner software
            </Link>

            <Link
              to="/FixedAsset"
              onClick={closeMenu}
            >
              FixedAsset Management
            </Link>

          </div>

        </div>

        {/* DIGITAL SIGNATURE */}

        <Link
          to="/DigitalSignature"
          onClick={closeMenu}
        >
          Digital Signature
        </Link>

        {/* ABOUT */}

        <Link
          to="/AboutUs"
          onClick={closeMenu}
        >
          About Us
        </Link>

        {/* LOGIN */}

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