import React from "react";
import "./header.css";
import nails1 from "../../images/nails1.jpg";
import Nav from "../Nav/Nav";
import ScrollAnimation from "react-animate-on-scroll";

const Header = () => {
  return (
    <>
      <div className="header">
        <Nav />
        <div className="container flex">
          <div className="header_text">
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
          <div className="header_img">
            <ScrollAnimation animateIn="rollIn" duration={5}>
              <img src={nails1} alt="nails" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
