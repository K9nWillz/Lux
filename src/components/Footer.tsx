import { ShoppingBag, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C111C] px-4 py-12 pb-24 lg:pb-12 text-slate-600 dark:text-slate-400 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white dark:text-slate-950">
                <ShoppingBag size={20} />
              </div>
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">LuxStore</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Your premium destination for authentic tech and fashion. Fast delivery, secure payments, and unparalleled customer service.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#catalog" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Catalog</a></li>
              <li><a href="#" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Return Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} LuxStore. All rights reserved.</p>
          <p>Designed for fast mobile shopping.</p>
        </div>
      </div>
    </footer>
  );
}
