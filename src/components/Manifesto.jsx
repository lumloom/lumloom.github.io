import { useFadeIn } from '../hooks/useFadeIn';

export default function Manifesto() {
  const ref = useFadeIn();

  return (
    <section id="our-story" className="section manifesto" ref={ref}>
      <div className="manifesto-inner fade-in">
        <h2 className="manifesto-title">작은 작업실, 룸룸</h2>
        <div className="manifesto-korean ko">
          <p>
            룸룸은 제가 직접 쓰고 싶은 도구를 만드는 개인 프로젝트입니다.
            <br />
            일상에서 느낀 불편을 해결하거나, 떠오른 아이디어를 실제로 만들어봅니다.
          </p>
          <p>
            완성한 프로젝트는 이곳에 하나씩 기록합니다.
            <br />
            제가 만든 도구가 다른 누군가에게도 유용하다면 좋겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
