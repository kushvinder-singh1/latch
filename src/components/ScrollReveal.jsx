import { useEffect, useRef } from 'react';

export function ScrollReveal({ children, className = '', threshold = 0.12 }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '0px 0px -48px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
