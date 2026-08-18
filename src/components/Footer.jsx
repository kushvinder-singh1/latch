import { Logo } from './Icons';
import './Footer.css';

export function Footer({ easterEgg }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-mark">
              <Logo size={20} />
            </span>
            <span>Latch</span>
          </div>
          <p className="footer-tagline">
            Webhook capture, inspection, and replay for engineering teams.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a href="#product">Product</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">Workflow</a>
          <a href="#cta">Early access</a>
        </nav>

        <p className="footer-copy">&copy; {year} Latch. All rights reserved.</p>

        {easterEgg && (
          <p className="footer-easter" role="status">
            You found the hidden delivery.
          </p>
        )}
      </div>
    </footer>
  );
}
