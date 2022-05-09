import React from "react";
import "./services.css";
import nails2 from "../../images/nails2.jpg";
import pedicure from "../../images/pedicure.png"
import paint from "../../images/paint.jpg";
import nailart from "../../images/nailart.jpg"
import parrafinwax from "../../images/parrafinwax.jpg"
const Services = () => {
  return (
    <>
      <div className="service">
        <div className="service_item">
          <div className="item">
            <img src={paint} alt="nailsicon" />
            <h3>Manicure</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cons.
            </p>
          </div>
          <div className="item">
            <img src={pedicure} alt="nailsicon" />
            <h3>Pedicure</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cons.
            </p>
          </div>
          <div className="item">
            <img src={nailart} alt="nailsicon" />
            <h3>Nail Art</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cons.
            </p>
          </div>
          <div className="item">
            <img src={parrafinwax} alt="nailsicon" />
            <h3>Paraffin Wax</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cons.
            </p>
          </div>
        </div>
        <div className="service_img">
          <img src={nails2} alt="nails2" />
        </div>
      </div>
    </>
  );
};

export default Services;
