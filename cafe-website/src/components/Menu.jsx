import '../styles/menu.css';

function Menu() {
  const menuItems = [
    { 
      name: "Signature Espresso", 
      price: "$3.50", 
      desc: "Double-shot of our house-blend Arabica with a velvet crema.",
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "Velvet Cappuccino", 
      price: "$4.00", 
      desc: "Equal parts espresso, steamed milk, and dense frothed foam.",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "Artisan Latte", 
      price: "$4.50", 
      desc: "Smooth espresso balanced with silky micro-foam art.",
      image: "https://tse4.mm.bing.net/th/id/OIP.MTethonwXq7Db4vLudgXoAHaE7?w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    { 
      name: "Dark Mocha", 
      price: "$5.00", 
      desc: "Rich espresso infused with 70% dark Belgian chocolate.",
      image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "Butter Croissant", 
      price: "$2.50", 
      desc: "Flaky, golden-brown pastry imported from France.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "Basque Cheesecake", 
      price: "$6.00", 
      desc: "Caramelized top with a rich, creamy center.",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section className="menu" id="menu">
      <div className="menu-header">
        <span className="section-subtitle">Selection</span>
        <h2>Our <em>Curated</em> Menu</h2>
        <div className="header-line"></div>
      </div>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <div className="menu-image-container">
              <img src={item.image} alt={item.name} />
              <div className="menu-price-tag">{item.price}</div>
            </div>
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;