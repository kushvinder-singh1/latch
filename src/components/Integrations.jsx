import { INTEGRATIONS } from '../data/content';
import './Integrations.css';

export function Integrations() {
  return (
    <section className="integrations" aria-label="Supported integrations">
      <div className="container integrations-inner">
        <p className="integrations-label">Compatible with leading webhook providers</p>
        <ul className="integrations-list">
          {INTEGRATIONS.map((name) => (
            <li key={name} className="integrations-item">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
