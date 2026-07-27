import { motion } from 'motion/react';
import { ShoppingBag, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function NavBar({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) {
  const [activeTab, setActiveTab] = useState('Home');
  const navLinks = ['Home', 'Shop', 'Categories', 'About Us', 'Reviews'];

  return (
    <>
      <div className="bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest text-center py-2 px-4">
        Now shipping nationwide <span className="inline-block w-1.5 h-1.5 rounded-full bg-white ml-2 animate-pulse"></span>
      </div>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 px-4 py-4 md:py-6 bg-slate-50/80 dark:bg-[#070A11]/80 backdrop-blur-sm"
      >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-full bg-white/90 dark:bg-[#0B101B]/90 px-6 py-3 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/80 shadow-lg dark:shadow-2xl transition-colors">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm">
              <ShoppingBag size={20} />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">LuxStore</span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveTab(link)}
                className={`relative text-sm font-medium transition-colors ${
                  activeTab === link 
                    ? 'text-slate-900 dark:text-white' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {link}
                {activeTab === link && (
                  <motion.div 
                    layoutId="navIndicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-6">
            <button 
              onClick={toggleDark} 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a 
              href="#catalog"
              className="flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:bg-emerald-400"
            >
              <WhatsAppIcon size={18} />
              <span className="hidden sm:inline">Order on WhatsApp</span>
              <span className="sm:hidden">Order</span>
            </a>
          </div>

        </div>
      </div>
    </motion.nav>
    </>
  );
}

