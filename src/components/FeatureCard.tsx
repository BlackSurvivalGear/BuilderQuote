import React from 'react';
import { Card } from './Card';
import { motion } from 'framer-motion';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4), ease: 'easeOut' }}
    >
      <Card
        glass
        hoverable
        className="p-6 md:p-8 h-full flex flex-col justify-between group relative overflow-hidden transition-all duration-300"
      >
        {/* Soft background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div>
          <div className="inline-flex items-center justify-center p-3.5 rounded-xl bg-bgDark border border-borderDark/80 text-primary group-hover:text-accent group-hover:border-accent/40 transition-colors duration-300 mb-6 shadow-inner">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Action arrow element */}
        <div className="mt-6 flex items-center text-xs font-semibold uppercase tracking-wider text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
          Learn more <span className="ml-1">→</span>
        </div>
      </Card>
    </motion.div>
  );
};
export default FeatureCard;
