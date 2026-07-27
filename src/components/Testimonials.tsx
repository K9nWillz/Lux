import { motion } from 'motion/react';
import { testimonials } from '../data';
import { Star, Quote } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <section className="px-4 py-20 overflow-hidden bg-slate-50 dark:bg-[#070A11] transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Loved by Customers</h2>
            <p className="text-slate-600 dark:text-slate-400">Don't just take our word for it.</p>
          </div>
          
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scrollRef.current?.scrollBy({ left: -350, behavior: 'smooth' })}
              disabled={!canScrollLeft}
              className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-slate-200 dark:border-transparent shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={() => scrollRef.current?.scrollBy({ left: 350, behavior: 'smooth' })}
              disabled={!canScrollRight}
              className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-slate-200 dark:border-transparent shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[350px] max-w-[400px] flex-shrink-0 snap-center rounded-3xl bg-white dark:bg-slate-800/40 p-8 border border-slate-200 dark:border-slate-700/50 flex flex-col relative shadow-sm"
            >
              <Quote className="absolute top-6 right-6 text-slate-100 dark:text-slate-700/50 w-12 h-12 rotate-180" />
              <div className="flex gap-1 mb-6 text-emerald-500 dark:text-emerald-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i >= testimonial.rating ? "text-slate-200 dark:text-slate-600" : ""} />
                ))}
              </div>
              
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 flex-1 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-700/50 pt-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-lg font-bold text-slate-900">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
