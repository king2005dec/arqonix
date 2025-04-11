
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', withText = true, className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <motion.div
          className={`rounded-full bg-gradient-to-br from-arqonix-purple to-arqonix-indigo ${sizeClasses[size]}`}
          animate={{ 
            boxShadow: ["0 0 0px rgba(155, 89, 182, 0.5)", "0 0 20px rgba(155, 89, 182, 0.8)", "0 0 0px rgba(155, 89, 182, 0.5)"]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={`absolute inset-0 rounded-full border-2 border-arqonix-blue border-t-transparent ${sizeClasses[size]}`}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>
      {withText && (
        <h1 className={`font-bold tracking-tight text-white ${textSizes[size]}`}>
          Arqon<span className="text-arqonix-purple">IX</span>
        </h1>
      )}
    </div>
  );
};

export default Logo;
