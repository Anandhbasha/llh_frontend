import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../CustomerDetails.css";


const CustomerDetails = () => {
  const navigate = useNavigate();

  /* CART FROM LOCALSTORAGE */
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const loadCart = () => {
      const cart = JSON.parse(localStorage.getItem("cartItem")) || [];
      setCartItem(cart);
    };

    loadCart();
    window.addEventListener("storage", loadCart);

    return () => window.removeEventListener("storage", loadCart);
  }, []);

  const [paymentType, setPaymentType] = useState("COD");

  /* FORM DATA */
  const [formData, setFormData] = useState({
    firstname: "",
    mail: "",
    mobile: "",
    address: "",
  });

  const [showPopup, setShowPopup] = useState("");

  /* TOTAL */
  const total = cartItem.reduce(
    (sum, item) => sum + Number(item.Price) * (item.quantity || 1),
    0
  );

  /* HANDLE INPUT */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* FORM VALIDATION */
  const isFormValid =
    formData.firstname &&
    formData.mail &&
    formData.mobile &&
    formData.address &&
    formData.mobile.length === 10;

  /* ---------------- COD ORDER ---------------- */
  const handleCODOrder = async () => {
    try {
      const res = await fetch("https://llh-backend.onrender.com/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData,
          cartItem,
          total,
          paymentType: "COD",
        }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.removeItem("cartItem");
        setCartItem([]);

        setShowPopup("success");

        setTimeout(() => {
          setShowPopup("");
          navigate("/order-summary", {
            state: {
              cartItem,
              total,
              formData,
              paymentType: "COD",
            },
          });
        }, 1500);
      } else {
        setShowPopup("failed");
      }
    } catch (err) {
      console.log(err);
      setShowPopup("error");
    }
  };
  

  /* ---------------- RAZORPAY ---------------- */
/* ---------------- RAZORPAY ---------------- */
  const handleRazorpay = async () => {
    try {
      const res = await fetch("https://llh-backend.onrender.com/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total }),
      });

      const order = await res.json();

      console.log("ORDER RECEIVED FROM BACKEND:", order);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY, // Hardcoded safely for testing
        amount: order.amount,
        currency: "INR",
        order_id: order.id, 
        name: "Lakshmi Store",
        description: "Thank you for shopping with us!",
        // 🔥 ADD THIS SUCCESS HANDLER CALLBACK:
        handler: async function (response) {
          try {
            // Once transaction succeeds, trigger your backend email system
            const mailRes = await fetch("https://llh-backend.onrender.com/send-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                formData,
                cartItem,
                total,
                paymentType: "ONLINE",
                paymentId: response.razorpay_payment_id, // Passed smoothly to email layout
              }),
            });

            const mailData = await mailRes.json();

            if (mailData.success) {
              localStorage.removeItem("cartItem");
              setCartItem([]);
              setShowPopup("success");

              setTimeout(() => {
                setShowPopup("");
                navigate("/order-summary", {
                  state: { cartItem, total, formData, paymentType: "ONLINE" },
                });
              }, 1500);
            } else {
              setShowPopup("failed");
            }
          } catch (mailErr) {
            console.log("Mail routing error:", mailErr);
            setShowPopup("error");
          }
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.log("Razorpay Checkout Error:", err);
    }
  };

  /* ---------------- SUBMIT HANDLER ---------------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      alert("Fill all required fields correctly");
      return;
    }

    if (paymentType === "COD") {
      handleCODOrder();
    } else {
      handleRazorpay();
    }
  };

  return (
    <>
      <div className="customer-page">
        {/* LEFT */}
        <div className="billing-section">
          <div className="checkout-header">
            <h1>Checkout</h1>
            <h2>Total : ₹{total}</h2>
          </div>

          <div className="billing-card">
            <h2>Billing Details</h2>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="text"
                  name="firstname"
                  placeholder="User Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  style={{ padding: "15px", width: "50%" }}
                />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile No"
                  maxLength="10"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  style={{ padding: "15px", width: "50%" }}
                />
              </div>

              <input
                type="email"
                name="mail"
                placeholder="Mail ID"
                value={formData.mail}
                onChange={handleChange}
                required
                style={{ padding: "15px" }}
              />

              <textarea
                name="address"
                placeholder="Customer Address"
                value={formData.address}
                onChange={handleChange}
                required
                style={{ padding: "15px" }}
              />

              {/* PAYMENT */}
              <div className="payment-box">
                <h3>Select Payment Method</h3>

                <label>
                  <input
                    type="radio"
                    value="COD"
                    checked={paymentType === "COD"}
                    onChange={() => setPaymentType("COD")}
                  />
                  Cash on Delivery
                </label>

                <label>
                  <input
                    type="radio"
                    value="ONLINE"
                    checked={paymentType === "ONLINE"}
                    onChange={() => setPaymentType("ONLINE")}
                  />
                  Online Payment
                </label>
              </div>

              <button
                type="submit"
                className={`pay-btn ${paymentType}`}
                disabled={!isFormValid}
              >
                {paymentType === "COD"
                  ? "Place Order"
                  : "Pay with Razorpay"}
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT */}
        <div className="cart-summary">
          <h2>Cart Summary</h2>

          {cartItem.map((item) => (
            <div key={item.id} className="summary-card">
              <img src={item.Image} alt={item.Title} />
              <div>
                <h3>{item.Title}</h3>
                <p>Qty: {item.quantity || 1}</p>
                <h4>₹{item.Price * (item.quantity || 1)}</h4>
              </div>
            </div>
          ))}

          <div className="grand-total">
            <h2>Grand Total</h2>
            <h1>₹{total}</h1>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="success-popup">
          {showPopup === "success"
            ? "Order Placed Successfully"
            : showPopup === "failed"
            ? "Order Failed"
            : "Error Occurred"}
        </div>
      )}
    </>
  );
};

export default CustomerDetails;