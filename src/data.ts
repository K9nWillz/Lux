import { Feature, Product, Testimonial } from './types';

export const WHATSAPP_NUMBER = "1234567890"; // Replace with actual number

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(price);
};

export const generateWhatsAppLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Air Max Infinity V2",
    price: 45000,
    originalPrice: 55000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    badge: "Hot Deal",
    category: "Fashion"
  },
  {
    id: "p2",
    name: "iPhone 15 Pro Max - 256GB",
    price: 1850000,
    originalPrice: 2000000,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
    badge: "In Stock",
    category: "Tech"
  },
  {
    id: "p3",
    name: "Sony WH-1000XM5 Headphones",
    price: 320000,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000&auto=format&fit=crop",
    category: "Tech"
  },
  {
    id: "p4",
    name: "Minimalist Leather Wallet",
    price: 15000,
    originalPrice: 20000,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop",
    badge: "Limited Edition",
    category: "Accessories"
  },
  {
    id: "p5",
    name: "MacBook Air M2",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
    category: "Tech"
  },
  {
    id: "p6",
    name: "Premium Mechanical Keyboard",
    price: 85000,
    originalPrice: 100000,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1000&auto=format&fit=crop",
    badge: "Restocked",
    category: "Tech"
  }
];

export const features: Feature[] = [
  {
    id: "f1",
    title: "Express Nationwide Shipping",
    description: "Same-day dispatch across major cities. Track your order in real-time.",
    icon: "truck"
  },
  {
    id: "f2",
    title: "Quality Assurance",
    description: "100% authentic products. Tested and verified before every delivery.",
    icon: "shield"
  },
  {
    id: "f3",
    title: "Instant Support",
    description: "Real human response on WhatsApp within minutes. No bots.",
    icon: "chat"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Olamide B.",
    location: "Lagos",
    rating: 5,
    text: "Incredible service! Ordered the Air Max in the morning and it was delivered to my office in Victoria Island before closing time."
  },
  {
    id: "t2",
    name: "Chukwudi M.",
    location: "Abuja",
    rating: 5,
    text: "The iPhone was exactly as described, brand new and sealed. The WhatsApp ordering process was so seamless."
  },
  {
    id: "t3",
    name: "Aisha T.",
    location: "Kano",
    rating: 4,
    text: "Great prices compared to what I found in physical stores. Will definitely be buying my gadgets here from now on."
  }
];
