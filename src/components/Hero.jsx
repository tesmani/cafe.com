import '../styles/hero.css';

function Hero() {
  // Function to handle smooth scrolling while keeping the <button> tag
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <span className="hero-subtitle">The Art of Brewing</span>
          <h1>Fresh Coffee. <br /><em>Real Vibes.</em></h1>
          <p>
            Experience the perfect blend of artisan beans and a cozy atmosphere. 
            Your daily escape starts here.
          </p>
          <div className="hero-btns">
            {/* Kept the button tags so your .btn-primary and .btn-secondary styles stay intact */}
            <button 
              className="btn-primary" 
              onClick={() => scrollToSection('menu')}
            >
              Explore Menu
            </button>
            
            <button 
              className="btn-secondary" 
              onClick={() => scrollToSection('about')}
            >
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;