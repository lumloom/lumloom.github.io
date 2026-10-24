import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Manifesto from './components/Manifesto';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

import './components/Header.css';
import './components/Hero.css';
import './components/DailyLine.css';
import './components/Philosophy.css';
import './components/Manifesto.css';
import './components/Projects.css';
import './components/About.css';
import './components/Footer.css';

function App() {
  const isAboutPage = window.location.pathname.endsWith('/about.html');

  if (isAboutPage) {
    return (
      <>
        <Header currentPage="about" />
        <main>
          <section id="top" className="about-page-hero">
            <div className="about-page-hero-inner">
              <p className="section-eyebrow">Our Story</p>
              <h1>Why Lumloom?</h1>
              <p>
                The thoughts and values behind the tools we make.
              </p>
            </div>
          </section>
          <Philosophy />
          <Manifesto />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header currentPage="home" />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
