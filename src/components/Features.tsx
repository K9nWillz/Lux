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

  return (
    <section className="px-4 py-12 bg-slate-50 dark:bg-[#070A11] transition-colors duration-300">
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

      </div>
    </section>
  );
}
