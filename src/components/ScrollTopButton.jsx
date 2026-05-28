import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../App.css"
const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <div className="scrollTop" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    )
  );
};

export default ScrollTopButton;