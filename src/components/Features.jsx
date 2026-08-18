import { FEATURES } from '../data/content';
import { FeatureIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';
import './Features.css';

export function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <ScrollReveal className="features-header">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Three capabilities that matter</h2>
        </ScrollReveal>

        <ul className="features-grid">
          {FEATURES.map((feature) => (
            <li key={feature.id} className="feature-card">
              <span className="feature-icon">
                <FeatureIcon name={feature.id} />
              </span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
