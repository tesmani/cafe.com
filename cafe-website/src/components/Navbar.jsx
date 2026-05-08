import { useState } from 'react';
import '../styles/navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu when opening modal
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            THE <span>CAFE</span>
          </div>

          {/* Hamburger Icon */}
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            {/* Visible only on Mobile Menu */}
            <li className="mobile-only">
              <button className="btn-nav" onClick={openModal}>Book a Table</button>
            </li>
          </ul>

          {/* Visible only on Desktop Nav */}
          <div className="nav-cta desktop-only">
            <button className="btn-nav" onClick={openModal}>Book a Table</button>
          </div>
        </div>
      </nav>

      {/* Reservation Modal Pop-up */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <h3>Reserve a Table</h3>
            <p>Please fill in your details and we will contact you shortly.</p>
            <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <div className="form-row">
                <input type="date" required />
                <input type="time" required />
              </div>
              <button type="submit" className="btn-submit">Confirm Reservation</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;