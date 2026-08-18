import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import './FinalCTA.css';

export function FinalCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <ScrollReveal className="cta-card">
          <h2 className="cta-title">Stop debugging webhooks from raw logs.</h2>
          <p className="cta-desc">
            Inspect the request. Understand the failure. Replay it.
          </p>

          {submitted ? (
            <p className="cta-success" role="status">
              Request received. We will contact you at the provided address.
            </p>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <label htmlFor="email" className="sr-only">
                Work email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="email"
                className="cta-input"
              />
              <button type="submit" className="btn btn-primary cta-submit">
                Request early access
              </button>
            </form>
          )}

          <p className="cta-fine">Private beta · No payment required</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
