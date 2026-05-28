import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { total, cartItem, formData } = state;



  return (
    <div className="payment-page">
      <h1>Payment Page</h1>

      <h2>Total: ₹{total}</h2>

      <button  className="payBtn">
        Pay with Razorpay
      </button>
    </div>
  );
};

export default PaymentPage;