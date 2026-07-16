import { useFadeIn } from '../hooks/useFadeIn';

export default function Philosophy() {
  const ref = useFadeIn();

  return (
    <section id="philosophy" className="section philosophy" ref={ref}>
      <div className="section-inner fade-in">
        <p className="section-eyebrow">Why Lumloom?</p>
        <h2 className="section-title">A name woven from two ideas</h2>
        <div className="philosophy-text">
          <p>
            <strong>Lum</strong> represents light, curiosity and clarity.
          </p>
          <p>
            <strong>Loom</strong> represents patiently weaving small moments
            into something meaningful.
          </p>
          <p>
            We believe that everyday growth is created one small improvement
            at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
