import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home";
import BareActs from "./pages/BareActs";
import ProfessionalBooks from "./pages/ProfessionalBooks";
import AcademicBooks from "./pages/AcademicBooks";
import "./App.css"
import Commonseal from "./pages/Commonseal";
import Minutessheet from "./pages/Minutessheet";
import Minutesbinder from "./pages/Minutesbinder";
import Minutesbook from "./pages/Minutesbook"
import Share from "./pages/Share";
import Combined from "./pages/Combined";
import Etds from "./pages/Etds";
import Xbrl from "./pages/Xbrl";
import Gst from "./pages/Gst";
import Payroll from "./pages/Payroll";
import "./App.css"
import DigitalSignature from "./pages/DigitalSignature";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login/Login";
import CartSidebar from "./components/CartSidebar";
import CustomerDetails from "./pages/CustomerDetails";
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";
import AddNewProducts from "./pages/AddNewProducts";
import ProtectedRoute from "./components/ProtectedRoute";
import MyOrders from "./pages/MyOrders";
import Pdfsigner from "./pages/Pdfsigner";
import FixedAsset from "./pages/FixedAsset";
import Books from "./pages/Books";
import Footer from "./components/Footer/Footer";
import PaymentPage from "./pages/Payment/PaymentPage";
import OrderSummary from "./pages/OrderSummary/OrderSummary";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <BrowserRouter>
     <div className='App'>
        <Navbar/>        
        <div className="mainAppPage" style={{marginTop:"80px",background: "linear-gradient(#3e62cfc7, #770ae0)"}}>
          <CartSidebar/> 
          <ScrollToTop />    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/AcademicBooks" element={<AcademicBooks/>} />
          <Route path="/ProfessionalBooks" element={<ProfessionalBooks/>} />
          <Route path="/Commonseal" element={<Commonseal/>} />
          <Route path="/Minutessheet" element={<Minutessheet />} />
          <Route path="/Minutesbook" element={<Minutesbook />} />
          <Route path="/Minutesbinder" element={<Minutesbinder />} />
          <Route path="/Share" element={<Share />} />
          <Route path="/Combined" element={<Combined />} />
          <Route path="/Etds" element={<Etds />} />
          <Route path="/Xbrl" element={<Xbrl />} />
          <Route path="/Gst" element={<Gst />} />
          <Route path="/Payroll" element={<Payroll />} />
          <Route path="/Pdfsigner" element={<Pdfsigner/>} />
          <Route path="/FixedAsset" element={<FixedAsset/>} />
          <Route path="/Books" element={<Books/>}/>
          <Route path="/DigitalSignature" element={<DigitalSignature/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/customer" element={<CustomerDetails />} /> 
          <Route path="/addproduct" element={<ProtectedRoute><AddNewProducts /></ProtectedRoute>} /> 
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/order-summary" element={<OrderSummary />} />
  
        </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>   
  
  );
}

export default App;