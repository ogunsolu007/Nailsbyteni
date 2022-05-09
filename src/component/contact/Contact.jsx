import "./contact.css";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="contact_section">
        <div className="flex-items">
          <div className="flex-item">
            <h2>Get in touch</h2>
            <div className="flex-item_content">
              <div>
                <p className="heading">Email</p>
                <p>Nailsbyteni@gmail.com</p>
                <p>08139395922</p>
              </div>
              <div>
                <p className="heading">Social Media</p>
                <FiFacebook className="icon" />{" "}
                <FiInstagram className="icon space " />{" "}
                <FaWhatsapp className="icon" />
              </div>
            </div>
          </div>
          <div className="flex-item">
            <h2>Where we are</h2>
            <div>
              <p className="heading">Address</p>
              <p>
                Funnab bustop <br />
                Abeokuta, Ogunstate <br />
                NIgeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
