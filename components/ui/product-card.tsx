
'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  admin?: string;
  icon?: LucideIcon;
  gradient?: string;
  index?: number;
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ProductCard({
  name,
  price,
  originalPrice,
  description,
  admin,
  icon: Icon,
  gradient = "from-purple-500 to-pink-500",
  index = 0
}: ProductCardProps) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {Icon && (
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradient} flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      )}
      
      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
      
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-green-400 font-bold">{price}</span>
        {originalPrice && (
          <span className="text-gray-400 line-through text-sm">{originalPrice}</span>
        )}
      </div>
      
      <p className="text-gray-300 text-sm mb-3">{description}</p>
      
      {admin && (
        <p className="text-purple-400 text-xs mb-4">{admin}</p>
      )}
      
      <Button 
        size="sm" 
        className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90`}
      >
        Beli Sekarang
      </Button>
    </motion.div>
  );
}
