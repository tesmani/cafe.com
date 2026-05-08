import '../styles/gallery.css';

function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085", alt: "Barista pouring latte art", class: "tall" },
    { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", alt: "Close up of espresso beans", class: "small" },
    { src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735", alt: "Cozy cafe interior seating", class: "wide" },
    { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb", alt: "Iced specialty coffee", class: "small" }
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <span className="section-subtitle">Aesthetic</span>
        <h2>The <em>Visual</em> Experience</h2>
      </div>

      <div className="gallery-mosaic">
        {images.map((img, index) => (
          <div className={`gallery-item ${img.class}`} key={index}>
            <div className="img-overlay">
              <span>View Moment</span>
            </div>
            <img src={`${img.src}?auto=format&fit=crop&q=80&w=800`} alt={img.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;