import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Rotation {
  x: number;
  y: number;
}

const EnhancedHeroSection: React.FC = () => {
  const [rotation, setRotation] = useState<Rotation>({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setRotation({ x: x * 20, y: y * 20 });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative max-w-6xl mx-auto px-4 py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1000px' }}
    >
      <motion.div 
        animate={{
          rotateX: -rotation.x,
          rotateY: rotation.y
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="space-y-6"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Full Stack Developer
          </span>
        </motion.h1>
        <div className="relative">
          <motion.div
            animate={{
              background: [
                "linear-gradient(to right, #3b82f6, #8b5cf6)",
                "linear-gradient(to right, #8b5cf6, #3b82f6)",
                "linear-gradient(to right, #3b82f6, #8b5cf6)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 rounded-lg opacity-10"
          />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl relative z-10">
            Building robust and scalable applications with modern technologies.
            Passionate about clean code and user experience.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedHeroSection;