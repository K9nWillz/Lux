import { motion } from 'motion/react';
import { ArrowRight, Star, Mouse } from 'lucide-react';
import { useState, useEffect } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative min-h-[calc(100dvh-120px)] pt-8 pb-20 px-4 flex flex-col justify-center bg-slate-50 dark:bg-[#070A11] transition-colors duration-300 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]"></div>
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-12 lg:mt-0">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-start text-left order-1 lg:order-1">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.75rem,11vw,5.5rem)] font-extrabold text-slate-900 dark:text-white tracking-tighter leading-[0.95] mb-8 font-['Syne'] uppercase w-full"
          >
            <span className="block mb-2">Premium</span>
            <span className="block mb-2">Gear</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-slate-400 to-slate-600 dark:from-slate-300 dark:to-slate-500 mb-2">
              Delivered
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-slate-400 to-slate-600 dark:from-slate-300 dark:to-slate-500 mb-2">
              To Your
            </span>
            <span className="block">Doorstep.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-10 pl-5 border-l-2 border-emerald-500/30 dark:border-slate-800"
          >
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-md leading-relaxed">
              Same-day dispatch across major cities.<br />
              100% authentic quality guaranteed.<br />
              Shop the latest tech, sneakers & fashion.
            </p>
          </motion.div>

          {/* Interactive CTAs & Reviews */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <a
              href="#catalog"
              className="group flex items-center justify-center gap-3 w-full sm:w-auto rounded-full bg-emerald-500 px-8 py-4 text-base font-bold text-white transition-all hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
            >
              <WhatsAppIcon size={20} className="group-hover:scale-110 transition-transform" />
              Browse Catalog & Order
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-all" />
            </a>
            
            <div className="flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
               <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-[#070A11] object-cover" />
                <img src="https://i.pravatar.cc/100?img=47" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-[#070A11] object-cover" />
                <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-[#070A11] object-cover" />
              </div>
              <div className="flex flex-col text-left">
                <span className="flex items-center gap-1 text-slate-900 dark:text-white font-bold text-base leading-tight">
                  <Star size={14} className="fill-emerald-500 text-emerald-500" /> 4.9/5
                </span>
                <span className="text-xs leading-tight opacity-80 mt-0.5">from 1k+ reviews</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Shoe & Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
          className="relative order-2 lg:order-2 flex justify-center w-full min-h-[500px] lg:min-h-[700px]"
        >
          {/* Radar/Ring Backgrounds */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full border border-slate-300 dark:border-slate-800/80 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border border-slate-200 dark:border-slate-800/50 pointer-events-none"></div>
          
          {/* Crosshairs */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-800 to-transparent pointer-events-none"></div>

          {/* Floating Podium */}
          <motion.div 
             animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2 w-[240px] sm:w-[320px] h-[60px] sm:h-[80px] rounded-[100%] border-t-2 border-slate-300 dark:border-slate-700 bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-800/80 dark:to-transparent z-10 blur-[1px]"
          ></motion.div>

          {/* Floating Shoe Area */}
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
             {/* Using a reliable transparent sneaker image */}
             <img 
               src="https://raw.githubusercontent.com/princewillkama/assets/main/sneaker.png" 
               onError={(e) => {
                 // Fallback if the transparent image isn't available
                 e.currentTarget.src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80";
                 e.currentTarget.style.borderRadius = "2rem";
               }}
               alt="Nike Sneaker"
               className="w-[280px] sm:w-[400px] lg:w-[500px] object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]"
             />
          </motion.div>

          {/* Top Right "Hot Item" Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-10 sm:top-20 right-0 lg:-right-4 bg-white/80 dark:bg-[#0B101B]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl z-30"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">🔥</span>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-['Space_Mono']">Hot Item</span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">Nike Air Max</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Infinity</p>
            <p className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-['Space_Mono'] tracking-tighter">₦45,000</p>
            <div className="mt-3 inline-block px-2 py-1 rounded border border-emerald-500/30 bg-emerald-500/10 text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              In Stock
            </div>
          </motion.div>

          {/* Bottom Right "Views" Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-20 sm:bottom-32 right-4 lg:right-10 bg-white/80 dark:bg-[#0B101B]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-2xl z-30 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/100?img=59" alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0B101B] object-cover" />
              <img src="https://i.pravatar.cc/100?img=60" alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0B101B] object-cover" />
              <img src="https://i.pravatar.cc/100?img=61" alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0B101B] object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 dark:text-white">24 people</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">viewed this today</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-2 animate-pulse"></div>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <Mouse size={20} className="text-slate-400 animate-bounce" />
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-['Space_Mono']">Scroll to explore</span>
        <div className="w-8 h-1 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
      </motion.div>
    </section>
  );
}

