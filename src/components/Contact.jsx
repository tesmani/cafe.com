import '../styles/contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <span className="section-subtitle">Location</span>
        <h2>Visit <em>The</em> Sanctuary</h2>
      </div>

      <div className="contact-container">
        <div className="contact-details">
          <div className="detail-item">
            <h4>Address</h4>
            <p>123 Coffee Street, Victoria Island<br />Lagos, Nigeria</p>
          </div>
          
          <div className="detail-item">
            <h4>Hours</h4>
            <div className="hours-grid">
              <span>Mon — Fri</span> <span>08:00 - 22:00</span>
              <span>Sat — Sun</span> <span>09:00 - 23:00</span>
            </div>
          </div>

          <div className="detail-item">
            <h4>Inquiries</h4>
            <p>+234 800 000 0000</p>
            <p className="email-link">hello@thecafe.com</p>
          </div>

          <button className="btn-contact">Get Directions</button>
        </div>

        <div className="contact-map">
          {/* Added a grayscale filter via CSS to make the map feel premium */}
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Victoria%20Island%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;