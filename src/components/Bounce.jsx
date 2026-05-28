import { Navigate, useNavigate } from "react-router-dom";
import "../Bounce.css"

const Bounce = () => {
      const navigate=useNavigate()

  return (

<div className="containerBalls" style={{textAlign:"center",marginTop:"15vh"}}>


  <div className="balls" style={{paddingTop:"40px"}}>
    <div className="ball" style={{paddingTop:'70px',backgroundColor:"white"}}>
      <h4 style={{paddingBottom:"20px",fontStyle:"oblique"}}>TDSMAN Desktop Plans</h4>
              <p>Standard/Professional/<br/>Enterprises Lite/<br/>Enterprise/Ultimate</p>

      </div>
    <div className="ball" style={{paddingTop:'90px',backgroundColor:"lightskyblue"}}>
      <h4>TDSMAN</h4>
        <h5>Tds/Tcs returns made easy 2026-27 New Releases</h5>

    </div>
    <div className="ball" style={{paddingTop:'90px',backgroundColor:"white"}}>
     
      <h4 style={{paddingBottom:"20px",fontStyle:"oblique"}}>TDSMAN Cloud Plans</h4>
        <p>Intro/Edge/Optima/<br></br>Premium/Premium+</p>
       

    </div>
     
  </div>
  <button className="glow" style={{border:"1px solid black",borderRadius:"50px",fontFamily:"cursive", height:"70px",width:"250px",backgroundColor:"green",color:"white", fontSize:"25px"}} onClick={()=>navigate("/etds")}>Plan Details</button>
     
</div>
  )}

export default Bounce;