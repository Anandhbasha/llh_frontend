import digi from "../../src/assets/Image/dsc.png";
import React, { useEffect, useRef, useState } from "react";

const TypeText = () => {
  const text =
    "We are providing Digital Signature Services for Individuals,Companies as well as NRI individuals";
  const [displayText, setDisplayText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  const sectionRef = useRef(null);

  // Detect scroll view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typing effect
  useEffect(() => {
    if (!startTyping) return;

    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i + 1));
      i++;

      if (i > text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [startTyping]);

  return (
    <div ref={sectionRef} className="TypingText">
      <h1
        style={{
          color: "#d05929",
          padding: "10px",
          textAlign:"left"
        }}
      >
        {displayText}
      </h1>
      <div
        className="text"
        style={{
          color: "white",
          padding:"30px",
          display: "flex",
          justifyContent:"space-around"
        }}
      >
        <img
          src={digi}
          alt="Digital Signature"
          style={{ width: "300px" }}
        />

        <div className="rightSideContent" style={{padding:"25px",display:"flex",flexDirection:"column",justifyContent:"space-around",gap:"15px"}}>
          <h2
          style={{
            color: "white",
            fontSize: "1.2em",

          }}
        >
          Who needs Digital Signature??
        </h2>
        <h4 style={{fontSize:".6em"}}>
          A Digital Signature is needed by individuals and Organizations
          <br /><br />
          Typically needs it For
        </h4>
        <h5 style={{fontSize:".6em"}}>
          Income Tax e-filing: Secure online tax returns
          <br /><br />
          MCA e-Filing: Electronic corporate filings
          <br /><br />
          e-Tendering: Safe online tender submissions
          <br /><br />
          DGFT/IE Code (Foreign Trade): Manage import/export documents
          <br /><br />
          EPF/EPFO: Electronic provident fund transactions
          <br /><br />
          GST Filing: Secure GST return filing
          <br /><br />
          IPR (Trademark/Patent): Protect intellectual property online
          <br /><br />
          ICEGATE:Secure customs documentation
          <br /><br />
          CBSE School: Authenticate school documents securely
        </h5>
        </div>
      </div>
    </div>
  );
};

export default TypeText;
