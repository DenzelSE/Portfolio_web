import { Github, ExternalLink } from 'lucide-react';
import { AnimatedCard } from './design/AnimantedCard';
import { SkillBadge } from './design/SkillBadge';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    techStack: string[];
    github: string;
    demo: string;
    image?: string;
  };
  darkMode: boolean;
}

export const ProjectCard = ({ project, darkMode }: ProjectCardProps) => {
  return (
      
    <AnimatedCard className="overflow-hidden" darkMode={darkMode}>
      {project.image && (
        <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
      <p className="mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <SkillBadge key={index} name={tech} />
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.github}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-gray-300 
            hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <Github size={18} />
          <span>Code</span>
        </a>
        <a
          href={project.demo}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-gray-300
            hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <ExternalLink size={18} />
          <span>Demo</span>
        </a>
      </div>
    </AnimatedCard>
  );
};