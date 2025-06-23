
'use client'

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  className = "text-center mb-16",
  titleClassName = "text-4xl md:text-5xl font-bold text-white mb-4",
  subtitleClassName = "text-xl text-gray-300 max-w-2xl mx-auto"
}: SectionHeaderProps) {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className={titleClassName}>{title}</h2>
      {subtitle && (
        <p className={subtitleClassName}>{subtitle}</p>
      )}
    </motion.div>
  );
}
