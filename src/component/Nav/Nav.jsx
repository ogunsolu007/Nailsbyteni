import React from "react";
import "./nav.css";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <nav className="nav-container">
        <div className="flex">
          <div onClick={scrollToTop}>
            <h3 className="logo">NailsbyTeni</h3>
          </div>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={5000}
              >
                Works
              </Link>
            </li>
            <li>Book</li>
            <li>Training</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
