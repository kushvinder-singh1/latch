import { useState } from 'react';
import { Logo, IconSun, IconMoon, IconMenu, IconClose } from './Icons';
import './Header.css';

const NAV_LINKS = [
  { href: '#product', label: 'Product' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
];

export function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo" aria-label="Latch home">
          <span className="logo-mark">
            <Logo size={24} />
          </span>
          <span className="logo-text">Latch</span>
        </a>

        <nav className="nav" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
            <span className="theme-toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <a href="#cta" className="btn btn-primary header-cta">
            Request access
          </a>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="container">
          <nav className="mobile-nav" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="mobile-nav-link" onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a href="#cta" className="btn btn-primary mobile-nav-cta" onClick={closeMenu}>
              Request access
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
