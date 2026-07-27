import { motion } from 'motion/react';
import { Truck, ShieldCheck, CreditCard, Package, Star, Calendar, Headphones } from 'lucide-react';

export default function Features() {
  const topFeatures = [
    {
      icon: <Truck className="text-emerald-500" size={24} />,
      title: "Fast Delivery",
      subtitle: "Across Nigeria"
    },
    {
      icon: <ShieldCheck className="text-emerald-500" size={24} />,
      title: "100% Authentic",
      subtitle: "Quality Guaranteed"
    },
    {
      icon: <CreditCard className="text-emerald-500" size={24} />,
      title: "Pay on Delivery",
      subtitle: "Secure & Verified"
    }
  ];

  const stats = [
    {
      icon: <Package className="text-emerald-500 mx-auto mb-4" size={32} />,
      value: "10,000+",
      label: "Products Sold"
    },
    {
      icon: <Star className="text-emerald-500 mx-auto mb-4" size={32} />,
      value: "4.9/5",
      label: "Average Rating"
    },
    {
      icon: <ShieldCheck className="text-emerald-500 mx-auto mb-4" size={32} />,
      value: "5+ Years",
      label: "Serving Customers"
    },
    {
      icon: <Headphones className="text-emerald-500 mx-auto mb-4" size={32} />,
      value: "24/7",
      label: "WhatsApp Support"
    }
  ];

  const aaaFeatures = [
    "Next-Gen 3D Secure Checkout",
    "AI-Powered Size Recommendations",
    "Real-Time Delivery Tracking",
    "Smart Inventory Predictive Analytics",
    "Augmented Reality Try-On",
    "Biometric Login Verification",
    "Zero-Latency Content Delivery",
    "Personalized Style Engine",
    "Omnichannel Cart Synchronization",
    "Dynamic Pricing Algorithms",
    "Sustainable Packaging Options",
    "Hyper-Local Dispatch Nodes",
    "Multi-Currency Auto-Conversion",
    "Voice-Activated Voice Search",
    "Smart Wishlist Notifications",
    "Loyalty Rewards Blockchain",
    "VIP Concierge Service",
    "End-to-End Encryption",
    "Automated Return Processing",
    "Carbon-Neutral Shipping",
    "Virtual Wardrobe Integration",
    "Interactive 360° Product Views",
    "One-Tap Apple Pay Integration",
    "Seamless Google Pay Checkout",
    "Haptic Feedback Interactions",
    "Machine Learning Fraud Prevention",
    "Predictive Search Autocomplete",
    "User-Generated Content Galleries",
    "Live Stream Shopping Events",
    "Push Notification Deal Alerts",
    "Cross-Platform Native Experience",
    "Adaptive Dark Mode Styling",
    "Web3 Wallet Integration",
    "Smart Contract Authenticity",
    "Global Tax Calculator",
    "Multi-Language Auto-Translation",
    "Peer-to-Peer Resale Marketplace",
    "Automated Subscription Deliveries",
    "Virtual Reality Storefronts",
    "Intelligent Size Forecasting",
    "Cloud-Synced Preferences",
    "Advanced Filter Combinations",
    "Instant Customer Support Bots",
    "Social Media Direct Checkout",
    "Flash Sale Queue Management",
    "Personalized Email Campaigns",
    "Dynamic Restock Alerts",
    "Gamified Shopping Milestones",
    "Premium VIP Early Access",
    "Exclusive Limited Drops"
  ];

  return (
    <section className="px-4 py-12 bg-slate-50 dark:bg-[#070A11] transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        
        {/* Horizontal Feature Pills */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {topFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-3xl bg-white dark:bg-[#0C111C] border border-slate-200 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#131B2B]">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight mb-1">{feature.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{feature.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-white dark:bg-[#0C111C] border border-slate-200 dark:border-slate-800 py-16 px-8 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                {stat.icon}
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 font-['Syne']">{stat.value}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AAA Features Marquee */}
        <div className="mt-8 relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 dark:from-[#070A11] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 dark:from-[#070A11] to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee flex gap-4 mb-4">
             {[...aaaFeatures.slice(0, 25), ...aaaFeatures.slice(0, 25)].map((feat, i) => (
                <div key={i} className="px-5 py-2.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0C111C] text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 shadow-sm flex-shrink-0 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {feat}
                </div>
             ))}
          </div>
          <div className="animate-marquee-reverse flex gap-4">
             {[...aaaFeatures.slice(25, 50), ...aaaFeatures.slice(25, 50)].map((feat, i) => (
                <div key={i} className="px-5 py-2.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0C111C] text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 shadow-sm flex-shrink-0 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {feat}
                </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}
