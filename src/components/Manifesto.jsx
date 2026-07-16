import { useFadeIn } from '../hooks/useFadeIn';

export default function Manifesto() {
  const ref = useFadeIn();

  return (
    <section className="section manifesto" ref={ref}>
      <div className="manifesto-inner fade-in">
        <p>
          We don't chase big revolutions.
        </p>
        <p>
          We believe the smallest improvements,
          <br />
          repeated every day,
          <br />
          shape a better life.
        </p>
        <p className="manifesto-emphasis">That's what we build.</p>
        <p className="manifesto-emphasis">
          One idea. One tool. One better day at a time.
        </p>
      </div>
    </section>
  );
}
