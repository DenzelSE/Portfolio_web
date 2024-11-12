import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Terminal, Award } from 'lucide-react';

export interface SkillGroup {
    category: string;
    items: string[];
  }

  export interface ThemeProps {
    darkMode: boolean;
  }

interface EnhancedSkillsSectionProps extends ThemeProps {
  skills: SkillGroup[];
}

const EnhancedSkillsSection: React.FC<EnhancedSkillsSectionProps> = ({ darkMode, skills }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Code />;
      case 1: return <Terminal />;
      case 2: return <Award />;
      default: return null;
    }
  };

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: groupIndex * 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold flex items-center">
                <span className="mr-2">{skillGroup.category}</span>
                {getIcon(groupIndex)}
              </h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-800 hover:bg-gray-700'
                        : 'bg-gray-50 hover:bg-gray-100'
                    } relative group cursor-pointer`}
                  >
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                    />
                    <span className="relative">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedSkillsSection;
