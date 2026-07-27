import { motion } from 'motion/react';
import { generateWhatsAppLink } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const whatsappUrl = generateWhatsAppLink("Hi, I have a general inquiry about your products.");

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.8)] before:absolute before:inset-0 before:-z-10 before:animate-ping before:rounded-full before:bg-emerald-500/40"
      aria-label="Contact on WhatsApp"
    >
      <WhatsAppIcon size={32} className="fill-slate-950" />
    </motion.a>
  );
}
