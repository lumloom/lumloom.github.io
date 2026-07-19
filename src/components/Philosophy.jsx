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
            <span className="philosophy-ko ko">
              빛과 호기심, 그리고 새로운 시작.
            </span>
          </p>
          <p>
            <strong>Loom</strong> represents patiently weaving small moments
            into something meaningful.
            <span className="philosophy-ko ko">
              작은 순간들을 천천히 엮어 의미를 만드는 베틀.
            </span>
          </p>
          <p>
            We believe that everyday growth is created one small improvement
            at a time.
            <span className="philosophy-ko ko">
              매일의 성장은 작은 개선 하나에서 시작된다고 믿습니다.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
