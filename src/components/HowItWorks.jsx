import { STEPS } from '../data/content';
import { ScrollReveal } from './ScrollReveal';
import './HowItWorks.css';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="container">
        <ScrollReveal className="how-header">
          <span className="section-label">Workflow</span>
          <h2 className="section-title">Connect, inspect, replay</h2>
        </ScrollReveal>

        <ol className="steps-list">
          {STEPS.flatMap((step, index) => {
            const items = [
              <li key={step.id} className="step-item">
                <span className="step-num">{step.id}</span>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
              </li>,
            ];
            if (index < STEPS.length - 1) {
              items.push(
                <li key={`connector-${index}`} className="step-connector" aria-hidden="true" />,
              );
            }
            return items;
          })}
        </ol>
      </div>
    </section>
  );
}
