import { useMemo } from 'react';
import './DataFlowArt.css';

const STREAM_PATHS = [
  { d: 'M 0 118 Q 220 98, 420 72 T 560 52', count: 26 },
  { d: 'M 32 88 Q 260 68, 440 58 T 560 48', count: 24 },
  { d: 'M 64 108 Q 280 88, 460 68 T 560 56', count: 22 },
  { d: 'M 1120 118 Q 900 98, 700 72 T 560 52', count: 26 },
  { d: 'M 1088 88 Q 860 68, 680 58 T 560 48', count: 24 },
  { d: 'M 1056 108 Q 840 88, 660 68 T 560 56', count: 22 },
];

const SPINE_PATH = { d: 'M 560 48 L 560 128', count: 16 };

function samplePath(d, count) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '0');
  svg.setAttribute('height', '0');
  svg.style.position = 'absolute';
  svg.style.visibility = 'hidden';
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);
  svg.appendChild(path);
  document.body.appendChild(svg);
  const length = path.getTotalLength();
  const points = [];
  for (let i = 0; i < count; i += 1) {
    const t = count === 1 ? 0 : i / (count - 1);
    const point = path.getPointAtLength(length * t);
    points.push({
      x: point.x,
      y: point.y,
      opacity: Math.min(0.58, 0.2 + t * 0.36),
      accent: t > 0.7,
      w: 4 + Math.round(t * 2.5),
    });
  }
  document.body.removeChild(svg);
  return points;
}

function buildDashes() {
  const all = [];
  STREAM_PATHS.forEach((path, index) => {
    samplePath(path.d, path.count).forEach((point, i) => {
      all.push({ ...point, key: `s-${index}-${i}` });
    });
  });
  samplePath(SPINE_PATH.d, SPINE_PATH.count).forEach((point, i) => {
    const t = i / (SPINE_PATH.count - 1);
    all.push({
      ...point,
      key: `spine-${i}`,
      opacity: 0.26 + t * 0.3,
      accent: t > 0.5,
      w: 4,
    });
  });
  return all;
}

export function DataFlowArt() {
  const dashes = useMemo(() => buildDashes(), []);

  return (
    <div className="data-flow-art" aria-hidden="true">
      <svg className="data-flow-svg" viewBox="0 0 1120 140" preserveAspectRatio="xMidYMid meet">
        <text x="64" y="22" className="flow-label flow-label-side">WEBHOOK</text>
        <text x="560" y="22" className="flow-label flow-label-center">INSPECTOR</text>
        <text x="1056" y="22" className="flow-label flow-label-side flow-label-right">DELIVERY</text>
        {dashes.map((dash) => (
          <rect
            key={dash.key}
            x={dash.x - dash.w / 2}
            y={dash.y}
            width={dash.w}
            height="1.35"
            rx="0.45"
            className={dash.accent ? 'flow-dash flow-dash-accent' : 'flow-dash'}
            opacity={dash.opacity}
          />
        ))}
        <circle cx="560" cy="48" r="3.5" className="flow-hub" />
        <line x1="560" y1="52" x2="560" y2="128" className="flow-spine" />
        <rect x="536" y="126" width="48" height="3" rx="1.5" className="flow-terminus" />
      </svg>
    </div>
  );
}
