import '../styles/features.css';

function Features() {
  const features = [
    {
      id: "01",
      title: "Premium Beans",
      desc: "Sourced from the high-altitude estates of Ethiopia and Colombia, roasted in small batches."
    },
    {
      id: "02",
      title: "Fresh Ingredients",
      desc: "Our pastries and syrups are handcrafted daily using only local, organic produce."
    },
    {
      id: "03",
      title: "Cozy Atmosphere",
      desc: "An architectural sanctuary designed for deep work, slow mornings, and warm connections."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-header">
        <span className="section-subtitle">Our Philosophy</span>
        <h2>The Excellence <em>Standard</em></h2>
      </div>

      <div className="features-container">
        {features.map((f) => (
          <div className="feature-card" key={f.id}>
            <span className="feature-number">{f.id}</span>
            <div className="feature-content">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
            <div className="feature-border"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;