import { useFadeIn } from '../hooks/useFadeIn';

export default function Philosophy() {
  const ref = useFadeIn();

  return (
    <section id="philosophy" className="section philosophy" ref={ref}>
      <div className="section-inner fade-in">
        <p className="section-eyebrow">About the name</p>
        <h2 className="section-title">이름의 뜻</h2>
        <div className="philosophy-text">
          <p className="ko">
            Lumloom은 빛을 떠올리게 하는 <strong>Lum</strong>과 무언가를 천천히
            엮는 <strong>Loom</strong>에서 가져온 이름입니다.
          </p>
          <p className="ko">
            작은 생각을 실제 도구로 만들어간다는 뜻을 담았습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
