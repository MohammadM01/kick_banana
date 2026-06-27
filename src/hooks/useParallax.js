import { useEffect, useRef } from 'react';

/**
 * Animates an element with a parallax offset based on scroll position.
 *
 * @param {number} speed  — multiplier: 0.1 = subtle, 0.4 = strong
 * @param {boolean} reverse — moves opposite direction
 * Returns a ref to attach to the element.
 */
export function useParallax(speed = 0.2, reverse = false) {
  const ref = useRef(null);
  const animFrame = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
      animFrame.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight;
        // How far the element centre is from the viewport centre
        const relY = (rect.top + rect.height / 2) - viewH / 2;
        const offset = relY * speed * (reverse ? -1 : 1);
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialise
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [speed, reverse]);

  return ref;
}
