import { useCallback, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Integrations } from './components/Integrations';
import { ProductDemo } from './components/ProductDemo';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { useKonamiCode } from './hooks/useKonamiCode';

export default function App() {
  const { theme, toggle } = useTheme();
  const [easterEgg, setEasterEgg] = useState(false);

  const activateEasterEgg = useCallback(() => {
    setEasterEgg(true);
    window.setTimeout(() => setEasterEgg(false), 4000);
  }, []);

  useKonamiCode(activateEasterEgg);

  return (
    <>
      <Header theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Integrations />
        <ProductDemo />
        <Features />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer easterEgg={easterEgg} />
    </>
  );
}
