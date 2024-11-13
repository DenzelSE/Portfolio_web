import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
// import { Project, ThemeProps } from '../types';

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    github: string;
    demo: string;
  }

  export interface ThemeProps {
    darkMode: boolean;
  }

interface Enhanced3DProjectCardProps extends ThemeProps {
  project: Project;
}

const Enhanced3DProjectCard: React.FC<Enhanced3DProjectCardProps> = ({ project, darkMode }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setRotate({ x: x * 20, y: y * 20 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{
          rotateX: -rotate.x,
          rotateY: rotate.y
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`p-6 rounded-lg relative group ${
          darkMode
            ? 'bg-gray-800 hover:bg-gray-700'
            : 'bg-gray-50 hover:bg-gray-100'
        }`}
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex space-x-4">
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <Github size={16} />
            <span>Code</span>
          </motion.a>
          <motion.a
            href={project.demo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Enhanced3DProjectCard;