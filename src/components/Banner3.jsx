import tax from "../../src/assets/Image/tax.webp"
import "../Banner.css"

const Banner3 = () => {
  return (
    <div className="banner3">
        <div className="banner-image" >
        <div >        
            <img src={tax} alt="Taxmann etds software" style={{width:"300px"}}/>
        </div>

        </div>
      <div className="content">
        <h1>Taxman etds software</h1>
        <h2>Prepare your e-TDS/TCS Return Within Minutes</h2><p>
Add organisation (deductor) and payee (deductee) details.<br></br>

Select type of return i.e. Form 24Q/26Q/27Q and 27EQ.<br></br>

Create TDS challan and map with payment entry made.<br></br>

Validate and generate TDS/TCS returns.

Start Your Free Trial</p></div>

      
    </div>
  );
};

export default Banner3;