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
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll('[data-reveal]');
    if (targets.length === 0) return;

    const reveal = (el) => {
      const delay = Number(el.dataset.revealDelay || 0);
      setTimeout(() => el.classList.add('revealed'), delay);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold,
        // Trigger slightly before element enters viewport
        rootMargin: '0px 0px -40px 0px',
      }
    );

    targets.forEach((el) => {
      // If already visible in viewport on mount, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal(el);
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
