import { motion, AnimatePresence } from 'motion/react';
import { products, formatPrice, generateWhatsAppLink } from '../data';
import { MessageCircle, Search, Filter, ArrowUpDown } from 'lucide-react';
import { Product } from '../types';
import { useState, useEffect } from 'react';

const categories = ['All', 'Tech', 'Fashion', 'Accessories'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
};

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc';

export default function ProductGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredProducts(products);
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading && filteredProducts.length === 0) return;
    
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });
      
      switch (sortBy) {
        case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
        case 'name-asc': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'featured': default: break;
      }
      
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <section id="catalog" className="px-4 py-24 scroll-mt-20 relative z-10 bg-slate-50 dark:bg-[#070A11] transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 font-['Syne'] uppercase">Trending Now</h2>
          <p className="text-slate-600 dark:text-slate-400 font-['Space_Mono'] text-sm tracking-wider">DISCOVER OUR MOST POPULAR ITEMS</p>
        </div>
        
        <div className="mb-10 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96 group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all shadow-sm font-['Space_Mono'] text-sm"
              />
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar justify-between md:justify-end">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <ArrowUpDown className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl pl-10 pr-10 py-3 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all shadow-sm font-['Space_Mono'] min-w-[160px]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto w-full pb-2 hide-scrollbar snap-x">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`snap-center whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all border font-['Space_Mono'] tracking-wide ${
                  selectedCategory === cat 
                    ? 'bg-emerald-500 text-white border-emerald-500 shadow-md' 
                    : 'bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={`skeleton-${i}`} className="rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-[420px] shadow-sm">
                    <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-800/50 animate-pulse" />
                    <div className="p-5 flex flex-col flex-1 gap-4">
                      <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded w-1/3 animate-pulse" />
                      <div className="h-6 bg-slate-100 dark:bg-slate-800 rounded w-3/4 animate-pulse" />
                      <div className="h-6 bg-slate-100 dark:bg-slate-800 rounded w-1/2 animate-pulse mt-auto" />
                      <div className="h-12 bg-slate-100 dark:bg-slate-800 rounded-xl w-full animate-pulse mt-2" />
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : filteredProducts.length > 0 ? (
              <motion.div
                key="content"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20 text-slate-500 w-full"
              >
                <Filter size={48} className="mb-4 opacity-50" />
                <p className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-['Syne']">No products found</p>
                <p className="font-['Space_Mono'] text-sm">Try adjusting your search or category filters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const orderMessage = `Hi, I would like to order the ${product.name} for ${formatPrice(product.price)}. Is it available?`;
  const whatsappUrl = generateWhatsAppLink(orderMessage);

  return (
    <motion.div
      variants={itemVariants}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 transition-all hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10 h-full shadow-sm"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 dark:to-slate-900/80 z-10 pointer-events-none" />
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
        {product.badge && (
          <div className="absolute left-3 top-3 z-20 rounded-full bg-slate-900/80 dark:bg-white/10 backdrop-blur-md border border-slate-700 dark:border-white/20 px-3 py-1 text-[10px] font-bold text-white shadow-lg uppercase font-['Space_Mono'] tracking-wider">
            {product.badge}
          </div>
        )}
      </div>
      
      <div className="flex flex-1 flex-col p-5 relative z-20">
        <div className="text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold mb-2 font-['Space_Mono']">{product.category}</div>
        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-slate-900 dark:text-white leading-tight font-['Syne']">
          {product.name}
        </h3>
        
        <div className="mt-auto mb-5 flex items-end gap-2">
          <span className="text-xl font-bold text-slate-900 dark:text-white font-['Space_Mono'] tracking-tight">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm font-medium text-slate-400 dark:text-slate-500 line-through mb-0.5 font-['Space_Mono']">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-3.5 text-sm font-bold text-slate-900 dark:text-white transition-all hover:bg-emerald-500 hover:border-emerald-400 hover:text-white dark:hover:text-slate-950 group/btn overflow-hidden relative shadow-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          <span className="relative z-10 flex items-center gap-2">
            <MessageCircle size={18} className="group-hover/btn:animate-bounce" />
            Order on WhatsApp
          </span>
        </a>
      </div>
    </motion.div>
  );
}
