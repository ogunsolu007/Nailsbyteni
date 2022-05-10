import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import {AiOutlineBars} from "react-icons/ai";
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
          <div className="bar-container">
            <AiOutlineBars  className="bar"/>
          </div>
          <ul>
            <li>
              <LinkScroll
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={5000}
              >
                Works
              </LinkScroll>
            </li>
            <li>
              <Link to="/bookappointment" className="link">
                Book
              </Link>
            </li>
            <li>
              <Link to="/training" className="link">
                Training
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
