import { Github, ExternalLink } from 'lucide-react'; 

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    techStack: string[];
    github: string;
    demo: string;
  };
  darkMode: boolean;
}

export const ProjectCard = ({ project, darkMode }: ProjectCardProps) => {
  return (
    <div
      className={`p-6 rounded-lg transition-all duration-300 ${
        darkMode
          ? 'bg-gray-800 hover:bg-gray-700'
          : 'bg-gray-50 hover:bg-gray-100'
      }`}
    >
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.github}
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <Github size={16} />
          <span>Code</span>
        </a>
        <a
          href={project.demo}
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ExternalLink size={16} />
          <span>Demo</span>
        </a>
      </div>
    </div>
  );
};
