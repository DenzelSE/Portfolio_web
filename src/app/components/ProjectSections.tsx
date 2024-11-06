import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

interface ProjectsSectionProps {
  darkMode: boolean;
}

export const ProjectsSection = ({ darkMode }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} darkMode={darkMode} />
        ))}
      </div>
    </section>
  );
};
