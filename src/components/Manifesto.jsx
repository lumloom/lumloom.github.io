import { useFadeIn } from '../hooks/useFadeIn';

export default function Manifesto() {
  const ref = useFadeIn();

  return (
    <section id="our-story" className="section manifesto" ref={ref}>
      <div className="manifesto-inner fade-in">
        <p className="section-eyebrow">Our Story</p>
        <h2 className="manifesto-title">작은 작업실, 룸룸</h2>
        <div className="manifesto-korean ko-serif">
          <p>
            룸룸은 제가 쓰고 싶은 것들을 만들어보는 작은 작업실입니다.
            <br />
            일상의 사소한 불편함에서 시작하기도 하고,
            <br />
            문득 떠올린 생각을 따라가기도 합니다.
            <br />
            꼭 특별한 무언가일 필요는 없습니다.
          </p>
          <p>
            그렇게 만든 무언가가
            <br />
            누군가의 하루에 작은 도움이 된다면 꽤 기쁠 것 같습니다.
          </p>
          <p className="manifesto-signature">-제작자-</p>
        </div>
      </div>
    </section>
  );
}
