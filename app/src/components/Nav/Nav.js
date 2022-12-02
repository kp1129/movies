import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => handleShow(window.scrollY > 100);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && `nav__black`}`}>
      <div className="nav__content">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
