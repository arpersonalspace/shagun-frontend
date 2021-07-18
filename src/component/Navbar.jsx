import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  
  const translate = () =>{
    if (window.scrollY > 80) {
      setScroll(true);
    }else{
      setScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll",translate);
    return () => window.removeEventListener("scroll" ,translate)
  }, []);
  return (
    <div className={scroll ? "navbar navbar__background" : "navbar"}>
      <div className="navbar__logo">
        <img src="full-logo.png" alt="logo-img" />
      </div>
      <div className="navbar__avtaar">
        <img src="netAvtaar.png" alt="netavtaar" />
      </div>
    </div>
  );
}

export default Navbar;
