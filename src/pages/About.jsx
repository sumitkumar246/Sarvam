import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-overlay"></div>

        <div className="about-content">
          <span>About Sarvam</span>

          <h1>
            Building Trust Through
            <br />
            Luxury Real Estate
          </h1>

          <p>
            Sarvam is dedicated to delivering premium residential,
            commercial and investment opportunities that combine
            luxury, comfort and long-term value.
          </p>
        </div>
      </section>

      {/* About Company */}
      <section className="about-section">
        <div className="about-grid">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
              alt="Sarvam"
            />
          </div>

          <div className="about-text">
            <span>Who We Are</span>

            <h2>
              Luxury Living
              <br />
              Starts With Sarvam
            </h2>

            <p>
              We specialize in premium residential and commercial
              properties across the most desirable locations.
              Our mission is to help clients find spaces that
              enhance their lifestyle while creating strong
              investment opportunities.
            </p>

            <p>
              With a focus on transparency, quality and customer
              satisfaction, Sarvam has become a trusted partner
              for buyers, investors and businesses.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat-card">
          <h2>200+</h2>
          <p>Luxury Projects</p>
        </div>

        <div className="stat-card">
          <h2>25+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h2>98%</h2>
          <p>Client Satisfaction</p>
        </div>

      </section>

      {/* Vision */}
      <section className="vision-section">

        <div className="vision-box">
          <h2>Our Vision</h2>

          <p>
            To become the most trusted luxury real estate brand by
            delivering exceptional properties and world-class
            customer experiences.
          </p>
        </div>

        <div className="vision-box">
          <h2>Our Mission</h2>

          <p>
            To connect clients with premium opportunities while
            ensuring transparency, quality and long-term value.
          </p>
        </div>

      </section>

    </div>
  );
};

export default About;