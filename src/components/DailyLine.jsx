import { useState } from 'react';

const quotes = [
  'Today is a good day to begin.',
  'Grow gently.',
  'Stay curious.',
  'Small steps matter.',
  'One better day.',
  'Keep weaving.',
  'Every idea begins small.',
  'Build with care.',
  'Make today meaningful.',
];

export default function DailyLine() {
  const [quote] = useState(
    () => quotes[Math.floor(Math.random() * quotes.length)]
  );

  return (
    <div className="daily-line">
      <span className="daily-line-rule" aria-hidden="true" />
      <span className="daily-line-eyebrow">Today</span>
      <p className="daily-line-quote">{quote}</p>
      <span className="daily-line-rule" aria-hidden="true" />
    </div>
  );
}
