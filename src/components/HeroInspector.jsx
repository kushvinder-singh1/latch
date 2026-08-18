import { HERO_DELIVERY } from '../data/content';
import './HeroInspector.css';

export function HeroInspector() {
  const { endpoint, status, code, latency, payload, headers } = HERO_DELIVERY;

  return (
    <div className="hero-inspector" aria-label="Example webhook inspector">
      <div className="inspector-chrome">
        <div className="inspector-dots" aria-hidden="true">
          <span /><span /><span />
        </div>
        <span className="inspector-title">Latch / Webhook Inspector</span>
        <span className="inspector-sample">Example delivery</span>
      </div>

      <div className="inspector-body">
        <div className="inspector-meta">
          <div className="inspector-meta-row">
            <span className="inspector-label">Webhook delivery</span>
            <span className="inspector-status">
              <span className="status-dot" aria-hidden="true" />
              {status}
            </span>
          </div>
          <div className="inspector-endpoint">{endpoint}</div>
          <div className="inspector-stats">
            <span className="stat-code">{code}</span>
            <span className="stat-latency">{latency}</span>
          </div>
        </div>

        <div className="inspector-panels">
          <div className="inspector-panel">
            <div className="panel-head">Payload</div>
            <pre className="panel-code">
              <code>{JSON.stringify(payload, null, 2)}</code>
            </pre>
          </div>
          <div className="inspector-panel inspector-panel--compact">
            <div className="panel-head">Headers</div>
            <dl className="header-list">
              {Object.entries(headers).map(([key, value]) => (
                <div key={key} className="header-row">
                  <dt>{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <button type="button" className="inspector-replay" disabled>
          Replay delivery
        </button>
      </div>
    </div>
  );
}
