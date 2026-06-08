import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-box">
        <span>Premium Real Estate</span>
        <h1>Discover Luxury Living With Sarvam</h1>
        <p>
          Exclusive residential and commercial properties crafted for comfort,
          elegance and smart investment.
        </p>

        <div className="hero-actions">
          <a href="/projects" className="btn-gold">Explore Projects</a>
          <a href="/contact" className="btn-outline">Book Consultation</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;