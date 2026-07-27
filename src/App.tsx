import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070A11] text-slate-900 dark:text-slate-200 selection:bg-emerald-500/30 font-sans antialiased overflow-x-hidden transition-colors duration-300">
      <NavBar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <main>
        <Hero />
        <Features />
        <ProductGrid />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

