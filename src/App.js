import './styles/global.css';
import Navbar from './components/Navbar'; // Added
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Features />
        <Gallery />
        <Contact />
      </main>
    
    </>
  );
}

export default App;