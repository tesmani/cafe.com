import '../styles/about.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        <div className="about-image-wrapper">
          <div className="image-experience-tag">Since 2018</div>
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800" 
            alt="The Coffee Craft" 
            className="main-about-img"
          />
          <div className="image-accent-border"></div>
        </div>

        <div className="about-text">
          <span className="section-subtitle">Heritage & Passion</span>
          <h2>Beyond the <em>Standard</em> Roast</h2>
          <p className="lead-text">
            We don’t just serve coffee — we curate an experience designed to awaken your senses.
          </p>
          <p>
            From ethically sourced, handpicked beans to the meticulous science of the pour, 
            every detail at <strong>The Cafe</strong> is a testament to our obsession with quality. 
            We believe the best conversations happen over the perfect cup, nestled in a 
            space that feels like an urban sanctuary.
          </p>
          <div className="signature">
            <p>Crafted with Heart,</p>
            <span className="owner-name">The Roasters</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;