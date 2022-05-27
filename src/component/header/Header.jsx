import React from "react";
import "./header.css";
import nails13 from "../../images/nails13.jpg";
import Nav from "../Nav/Nav";
import ScrollAnimation from "react-animate-on-scroll";

const Header = () => {
  return (
    <>
      <div className="header">
        {/* <Nav /> */}
        <div className="header_container flex_container">
          <div className="header_text-container">
            <ScrollAnimation animateIn="fadeIn " duration={4}>
              <h1>
                Nails By Teni <br /> Creating Beauty
              </h1>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                magni vitae incidunt repellendus tempore inventore pariatur nisi
                alias libero fuga!
              </p>
              <button className="btn_cta btn">Explore</button>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animateIn="slideInRight" duration={5} className="header_img">
            <img src={nails13} alt="nails" />
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};

export default Header;
