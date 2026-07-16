import { useFadeIn } from '../hooks/useFadeIn';

export default function About() {
  const ref = useFadeIn();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="section-inner fade-in">
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">Not a company. An ongoing collection.</h2>
        <div className="about-text">
          <p>
            Lumloom is not a company. It is an ongoing collection of
            thoughtful projects.
          </p>
          <p>
            Each project begins with the same question:
          </p>
          <p className="about-question">
            "Can this make someone's day just a little better?"
          </p>
        </div>
      </div>
    </section>
  );
}
