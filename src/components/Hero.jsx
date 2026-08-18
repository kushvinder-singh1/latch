import { IconArrow } from './Icons';
import { HeroInspector } from './HeroInspector';
import { DataFlowArt } from './DataFlowArt';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">Webhook infrastructure for engineering teams</p>
          <h1 className="hero-title">
            <span className="hero-line-first">Every payload captured.</span>
            <span className="hero-accent">Every delivery debuggable.</span>
          </h1>
          <p className="hero-subtitle">
            Latch provides persistent webhook endpoints with structured inspection
            and one-click replay — so your team resolves integration failures
            before they reach production.
          </p>
          <div className="hero-actions">
            <a href="#cta" className="btn btn-primary">
              Request early access
              <IconArrow />
            </a>
            <a href="#product" className="btn btn-ghost">
              View product demo
            </a>
          </div>
          <p className="hero-note">Currently in private beta. No credit card required.</p>
        </div>
      </div>
      <div className="hero-art-band">
        <div className="hero-art-inner">
          <DataFlowArt />
        </div>
      </div>
      <div className="container hero-visual-wrap">
        <HeroInspector />
      </div>
    </section>
  );
}
