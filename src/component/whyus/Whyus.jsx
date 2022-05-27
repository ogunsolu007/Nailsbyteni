import React from "react";
import "./whyus.css";
import nails3 from "../../images/nails3.jpg";
import nails4 from "../../images/nails4.jpg";
import nails5 from "../../images/nails5.jpg";
import nails8 from "../../images/nails8.jpg";
import ScrollAnimation from "react-animate-on-scroll";
const Whyus = () => {
  return (
    <>
      <div className="whyus_section">
        <div className="whyus_container flex_container">
          <ScrollAnimation
            animateIn="fadeIn"
            duration={6}
            delay={3}
            className="nails_img"
          >
            <img src={nails4} alt="nailsimg" />
            <img src={nails5} alt="nailsimg" />
            <img src={nails3} alt="nailsimg" />
            <img src={nails8} alt="nailsimg" />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="slideInUp"
            duration={3}
            className="whyus_content"
          >
            <h1>
              Why Our Clients <br />
              -----Choose Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima.
            </p>
            <p className="p2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt, aspernatur? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Incidunt, aspernatur? Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Incidunt, aspernatur?
            </p>
            <button className="btn_cta btn">Book Now</button>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};

export default Whyus;
