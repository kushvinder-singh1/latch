import { useEffect, useState } from 'react';

const SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA',
];

export function useKonamiCode(onActivate) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === SEQUENCE[progress]) {
        const next = progress + 1;
        if (next === SEQUENCE.length) {
          onActivate();
          setProgress(0);
        } else {
          setProgress(next);
        }
      } else {
        setProgress(e.code === SEQUENCE[0] ? 1 : 0);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [progress, onActivate]);
}
