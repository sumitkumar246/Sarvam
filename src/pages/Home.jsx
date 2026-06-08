import Hero from "../components/Hero";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="section-title">
          <span>Why Choose Us</span>
          <h2>Premium Property Experience</h2>
        </div>

        <div className="features">
          <div className="feature-card">
            <h3>Luxury Projects</h3>
            <p>Handpicked premium properties in prime locations.</p>
          </div>

          <div className="feature-card">
            <h3>Trusted Advisory</h3>
            <p>Transparent guidance for buying, selling and investment.</p>
          </div>

          <div className="feature-card">
            <h3>Smart Investment</h3>
            <p>Properties with strong future growth potential.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;