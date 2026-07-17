import DailyLine from './DailyLine';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <h1 className="hero-title">Lumloom</h1>
        <p className="hero-slogan">We weave brighter days.</p>
        <p className="hero-sub">
          Thoughtful tools
          <br />
          for everyday life.
        </p>
        <p className="hero-korean ko">
          작은 아이디어가
          <br />
          하루를 조금 더 밝게 만듭니다.
        </p>

        <DailyLine />

        <a href="#projects" className="hero-cta">Explore Projects</a>

        <a href="#philosophy" className="hero-scroll-hint">
          <span className="hero-scroll-arrow" aria-hidden="true">↓</span>
          Scroll
        </a>
      </div>
    </section>
  );
}
