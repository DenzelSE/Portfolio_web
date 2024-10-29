import { Github, Linkedin, Mail } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold">
          Software Developer
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
          Building robust and scalable applications with modern technologies.
          Passionate about clean code and user experience.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href="#" className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline">
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};
