import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Manifesto from './components/Manifesto';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './components/Header.css';
import './components/Hero.css';
import './components/DailyLine.css';
import './components/Philosophy.css';
import './components/Manifesto.css';
import './components/Projects.css';
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
              <p className="section-eyebrow">Lumloom</p>
              <h1>Our Story</h1>
            </div>
          </section>
          <Manifesto />
          <Philosophy />
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
      </main>
      <Footer />
    </>
  );
}

export default App;
