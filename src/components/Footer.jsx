import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h2 className="footer-logo">SARVAM</h2>
          <p>
            Experience luxury living with premium residential,
            commercial and investment opportunities.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-col">
          <h3>Our Services</h3>
          <a href="#">Luxury Apartments</a>
          <a href="#">Villas</a>
          <a href="#">Commercial Space</a>
          <a href="#">Property Investment</a>
        </div>

        <div className="footer-col">
          <h3>Contact Info</h3>

          <p>
            <FaPhoneAlt /> +91 7082003056
          </p>

          <p>
            <FaEnvelope /> info@sarvam.com
          </p>

          <p>
            <FaMapMarkerAlt /> Gurgaon, Haryana
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 SARVAM | Luxury Living Starts Here
      </div>
    </footer>
  );
};

export default Footer;