import {
  FaBuilding,
  FaHome,
  FaChartLine,
  FaHandshake,
  FaKey,
  FaMapMarkedAlt,
} from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FaHome />,
    title: "Luxury Residential",
    text: "Premium apartments, villas and luxury homes in prime locations.",
  },
  {
    icon: <FaBuilding />,
    title: "Commercial Spaces",
    text: "Office spaces, retail shops and business properties for growth.",
  },
  {
    icon: <FaChartLine />,
    title: "Investment Advisory",
    text: "Smart real estate investment guidance with future value focus.",
  },
  {
    icon: <FaHandshake />,
    title: "Property Consultation",
    text: "Transparent property advice for buying, selling and leasing.",
  },
  {
    icon: <FaKey />,
    title: "End-to-End Support",
    text: "Site visit, documentation, negotiation and possession assistance.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Prime Location Deals",
    text: "Verified properties in high-demand real estate zones.",
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <span>Our Services</span>
          <h1>Premium Real Estate Solutions</h1>
          <p>
            Luxury property services designed for buyers, investors and
            businesses looking for trusted real estate opportunities.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="services-title">
          <span>What We Offer</span>
          <h2>Luxury Services For Smart Property Decisions</h2>
        </div>

        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="/contact">Get Consultation</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;