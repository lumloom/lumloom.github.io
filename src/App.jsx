import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Manifesto from './components/Manifesto';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

import './components/Header.css';
import './components/Hero.css';
import './components/Philosophy.css';
import './components/Manifesto.css';
import './components/Projects.css';
import './components/About.css';
import './components/Footer.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Manifesto />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
