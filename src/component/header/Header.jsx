import React from "react";
import "./header.css";
import nails1 from "../../images/nails1.jpg"
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <>
      <div className="header">
        <Nav/>
        <div className="container flex">
          <div className="header_text">
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
          </div>
          <div className="header_img">
            <img src={nails1} alt="nails" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
