/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ClaimAndCalculator } from './components/ClaimAndCalculator';
import { EcosystemBento } from './components/EcosystemBento';
import { VipTiersSection } from './components/VipTiersSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  // Dynamically synchronize canonical and og:url tags for SEO indexing
  useEffect(() => {
    const currentUrl = window.location.origin + window.location.pathname;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;

    let ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = currentUrl;
  }, []);

  return (
    <div className="min-h-screen bg-[#0B111A] text-slate-100">
      <Header />
      <main>
        <HeroSection />
        <ClaimAndCalculator />
        <EcosystemBento />
        <VipTiersSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
