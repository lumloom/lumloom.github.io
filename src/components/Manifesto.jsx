import { useFadeIn } from '../hooks/useFadeIn';

export default function Manifesto() {
  const ref = useFadeIn();

  return (
    <section id="manifesto" className="section manifesto" ref={ref}>
      <div className="manifesto-inner fade-in">
        <p>
          We don't chase big revolutions.
        </p>
        <p className="manifesto-korean ko-serif">
          우리는 거대한 혁신보다,
          <br />
          매일 조금 더 나아지는 삶을 만드는
          <br />
          도구를 믿습니다.
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
        <p className="manifesto-korean manifesto-korean-closing ko-serif">
          하나의 생각, 하나의 도구.
          <br />
          그렇게 하루가 조금씩 밝아집니다.
        </p>
      </div>
    </section>
  );
}
