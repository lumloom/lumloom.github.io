import { useFadeIn } from '../hooks/useFadeIn';

export default function Manifesto() {
  const ref = useFadeIn();

  return (
    <section id="our-story" className="section manifesto" ref={ref}>
      <div className="manifesto-inner fade-in">
        <h2 className="manifesto-title">작은 작업실, 룸룸</h2>
        <div className="manifesto-korean ko">
          <p>
            룸룸은 빛을 떠올리게 하는 Lum과 무언가를 엮는다는 뜻의 Loom에서
            가져온 이름으로,
            <br />
            작은 생각들을 실제 도구로 만들어간다는 뜻을 담고 있습니다.
          </p>
          <p>
            룸룸은 제가 직접 쓰고 싶은 앱을 만드는 개인 프로젝트입니다.
            <br />
            일상의 사소한 불편함을 개선하기 위해서나, 문득 떠오른 생각을 따라
            만들기도 했습니다.
          </p>
          <p>
            완성된 프로젝트는 누구나 사용할 수 있도록 하였고, 이 곳에 하나씩
            기록하고 있습니다.
            <br />
            제가 만든 도구가 다른 누군가에게도 도움이 된다면 참 기쁠 것 같습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
