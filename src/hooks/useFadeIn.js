import { useEffect, useRef } from 'react';

export function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // The ref sits on the <section>, but the .fade-in (opacity: 0) element
    // is usually an inner wrapper — is-visible must land on that element.
    const target = node.classList.contains('fade-in')
      ? node
      : node.querySelector('.fade-in') ?? node;

    // Content must never stay hidden if the observer can't run.
    if (!('IntersectionObserver' in window)) {
      target.classList.add('is-visible');
      return;
    }

    // threshold 0 + a small bottom rootMargin: a tall section (e.g. Projects)
    // can never have 15% of its full height on screen at once, so any
    // ratio-based threshold would keep it permanently invisible.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
