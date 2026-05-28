import { useSelector, useDispatch } from "react-redux";

import {
  clearCart,
  toggleCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../Slices.js/CartSlice";

import "../Cartsidebar.css";

import { useNavigate } from "react-router-dom";

const CartSidebar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { cartItem, showCart } = useSelector((state) => state.Cart);

  const totalAmount = cartItem.reduce((total, item) => {
    return total + item.Price * (item.quantity || 1);
  }, 0);

  
  return (
    <>
      {/* OVERLAY */}

      {showCart && (
        <div className="overlay" onClick={() => dispatch(toggleCart())}></div>
      )}

      {/* SIDEBAR */}

      <div className={`cartSidebar ${showCart ? "show" : ""}`}>
        {/* TOP SECTION */}

        <div className="topSectionSide">
          <h2
            style={{
              color: "rgb(234, 89, 12)",
              fontSize: "32px",
            }}
          >
            Cart Items
          </h2>

          <button className="closeBtn" onClick={() => dispatch(toggleCart())}>
            ✖
          </button>
        </div>

        {/* CHECKOUT BUTTON */}

        <div className="Cbtn" style={{ padding: "10px 30px" }}>
          <button
            className="checkoutBtn"
            onClick={() => {
              dispatch(toggleCart());

              navigate("/customer", {
                state: {
                  cartItem,
                  totalAmount,
                },
              });
            }}
          >
            Checkout
          </button>
        </div>

        {/* PRODUCTS */}

        <div className="Addedproducts" style={{ padding: "40px" }}>
          {cartItem.map((item) => (
            <div key={item.id} className="cartCard">
              <img src={item.Image} width={"150px"} height={"150px"} alt="" />

              <p>{item.Title}</p>

              {/* QUANTITY */}

              <h3>Quantity :{item.quantity || 1}</h3>

              {/* PRICE */}

              {item.type === "book" ? (
                <div>
                  <h3
                    style={{
                      textDecoration: "line-through",
                      color: "gray",
                    }}
                  >
                    Actual : ₹{item.Price * (item.quantity || 1)}
                  </h3>

                  <h3
                    style={{
                      color: "green",
                    }}
                  >
                    15% Discount : ₹
                    {Math.round(
                      (item.Price - (item.Price * 15) / 100) *
                        (item.quantity || 1),
                    )}
                  </h3>
                </div>
              ) : (
                <div>
                  <h3>Actual : ₹{item.Price * (item.quantity || 1)}</h3>

                  <h3
                    style={{
                      color: "orangered",
                    }}
                  >
                    +18% GST : ₹
                    {Math.round(
                      (item.Price + (item.Price * 18) / 100) *
                        (item.quantity || 1),
                    )}
                  </h3>
                </div>
              )}

              {/* BUTTONS */}

              <div className="qty-controls">
                <button onClick={() => dispatch(increaseQty(item.id))}>
                  +
                </button>

                <button onClick={() => dispatch(decreaseQty(item.id))}>
                  -
                </button>

                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="totalSection">
            <h2>Total: ₹{totalAmount}</h2>
          </div>
          {/* CLEAR BUTTON */}
          <div className="Cbtn" style={{ padding: "10px 30px" }}>
            <button
              className="checkoutBtn"
              onClick={() => {
                dispatch(toggleCart());

                navigate("/customer", {
                  state: {
                    cartItem,
                    totalAmount,
                  },
                });
              }}
            >
              Checkout
            </button>
          </div>

          <button className="clearBtn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>

          {/* TOTAL */}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
