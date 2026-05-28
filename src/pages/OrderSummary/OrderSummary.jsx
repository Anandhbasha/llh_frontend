import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./OrderSummary.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../../slices/CartSlice";

const OrderSummary = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [show, setShow] = useState(true);

  const { cartItem, total, formData, paymentType } = state;


  const handleClose = () => {
  localStorage.removeItem("cartItem");
  dispatch(clearCart());

  navigate("/", { replace: true }); // 🔥 important fix
};
  return (
    <>
      {show && (
        <div className="order-popup">
          <div className="popup-box">

            <button className="closeBtn1" onClick={handleClose}>
              ✖
            </button>

            <h2 className="success-title">Order Placed Successfully</h2>

            <h4>Payment Type: {paymentType}</h4>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItem.map((item) => (
                    <tr key={item.id}>
                      <td>{item.Title}</td>
                      <td>{item.quantity || 1}</td>
                      <td>₹{item.Price * (item.quantity || 1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="total">Total: ₹{total}</h2>

            <div className="customer-info">
              <p>Name: {formData.firstname}</p>
              <p>Mobile: {formData.mobile}</p>
              <p>Email: {formData.mail}</p>
              <p>Address: {formData.address}</p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default OrderSummary;