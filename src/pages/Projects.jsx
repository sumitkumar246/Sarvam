import "./Projects.css";

const projects = [
  {
    title: "Luxury Residences",
    location: "Gurgaon",
    price: "₹2.5 Cr*",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Premium Apartments",
    location: "Delhi NCR",
    price: "₹95 Lakh*",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Commercial Space",
    location: "Noida",
    price: "₹1.2 Cr*",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
];

const Projects = () => {
  return (
    <section className="section">
      <div className="section-title">
        <span>Our Projects</span>
        <h2>Featured Premium Properties</h2>
      </div>

      <div className="project-grid">
        {projects.map((item, index) => (
          <div className="project-card" key={index}>
            <img src={item.img} alt={item.title} />

            <div className="project-info">
              <h3>{item.title}</h3>
              <p>{item.location}</p>
              <h4>{item.price}</h4>
              <a href="/contact">Enquire Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;