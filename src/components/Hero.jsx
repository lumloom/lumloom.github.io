import DailyLine from './DailyLine';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <h1 className="hero-title">Lumloom</h1>
        <p className="hero-slogan">We weave brighter days.</p>
        <p className="hero-slogan hero-slogan-sub">
          Thoughtful tools
          <br />
          for everyday life.
        </p>

        <DailyLine />

        <div className="hero-actions">
          <a href="#projects" className="hero-cta">Explore Projects</a>
          <a href="./about.html" className="hero-cta hero-cta-secondary">Why Lumloom?</a>
        </div>

        <a href="#projects" className="hero-scroll-hint">
          <span className="hero-scroll-arrow" aria-hidden="true">↓</span>
          Scroll
        </a>
      </div>
    </section>
  );
}
