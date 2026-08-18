import { INTEGRATIONS } from '../data/content';
import './Integrations.css';

export function Integrations() {
  return (
    <section className="integrations" aria-label="Example webhook sources">
      <div className="container integrations-inner">
        <p className="integrations-label">Example webhook sources</p>
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
