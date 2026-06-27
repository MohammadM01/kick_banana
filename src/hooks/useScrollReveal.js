import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to a container element and adds
 * the class `revealed` to every child that has `data-reveal` once
 * it enters the viewport.  Supports `data-reveal-delay` (ms).
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <section ref={ref}>
 *     <div data-reveal data-reveal-delay="100">...</div>
 *   </section>
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const delay = entry.target.dataset.revealDelay || 0;
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, Number(delay));
          observer.unobserve(entry.target);
        });
      },
      { threshold }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
