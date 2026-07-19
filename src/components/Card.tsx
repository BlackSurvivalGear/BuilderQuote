import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = true,
  glass = true,
}) => {
  const isClickable = typeof onClick === 'function';

  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverable || isClickable ? { y: -5, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`
        rounded-2xl
        border border-borderDark/60
        overflow-hidden
        ${glass ? 'glass-panel' : 'bg-cardDark'}
        ${hoverable || isClickable ? 'glass-panel-hover cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
export default Card;
