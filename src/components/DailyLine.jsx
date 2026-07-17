import { useState } from 'react';

// Each line pairs an English brand voice with a Korean emotional voice —
// the Korean is a companion thought, never a translation.
const quotes = [
  { en: 'Today is a good day to begin.', ko: '시작하기 좋은 날입니다.' },
  { en: 'Grow gently.', ko: '천천히, 부드럽게 자라나기를.' },
  { en: 'Stay curious.', ko: '호기심은 오늘을 새롭게 합니다.' },
  { en: 'Small steps matter.', ko: '작은 걸음이 길을 만듭니다.' },
  { en: 'One better day.', ko: '어제보다 조금 나은 하루.' },
  { en: 'Keep weaving.', ko: '오늘도 한 올, 천천히.' },
  { en: 'Every idea begins small.', ko: '오늘도 작은 시작이면 충분합니다.' },
  { en: 'Build with care.', ko: '정성으로 지은 것은 오래 남습니다.' },
  { en: 'Make today meaningful.', ko: '오늘 하루에 작은 의미를.' },
];

export default function DailyLine() {
  const [quote] = useState(
    () => quotes[Math.floor(Math.random() * quotes.length)]
  );

  return (
    <div className="daily-line">
      <span className="daily-line-rule" aria-hidden="true" />
      <div className="daily-line-body">
        <span className="daily-line-eyebrow">Today</span>
        <p className="daily-line-quote">{quote.en}</p>
        <p className="daily-line-quote-ko ko-serif">{quote.ko}</p>
      </div>
      <span className="daily-line-rule" aria-hidden="true" />
    </div>
  );
}
