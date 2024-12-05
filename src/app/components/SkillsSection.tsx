import { motion } from 'framer-motion';
import { skills } from '../data/skills';

interface SkillsSectionProps {
  darkMode: boolean;
}

export const SkillsSection = ({ darkMode }: SkillsSectionProps) => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-20">
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
      <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillGroup, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
            <div className="space-y-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className={`p-2 rounded ${
                    darkMode
                      ? 'bg-gray-800 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-700'
                      : 'bg-gray-50 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-100'
                  }`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </motion.div>  
    </section>
  );
};
