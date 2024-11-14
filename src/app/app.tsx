// App.tsx
"use client";

import React, { useState } from 'react';
import { useScroll } from 'framer-motion';
import ParticlesBackground from './components/ParticleBackground';
import ScrollProgressBar from './components/ScrollProgressBar';
import EnhancedHeroSection from './components/EnhancedHero';
import EnhancedSkillsSection from './components/EnhancedSkills';
import Enhanced3DProjectCard from './components/Enhanced3DprojectCard';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
// import { Project, SkillGroup } from './types';

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    github: string;
    demo: string;
  }
  
  export interface SkillGroup {
    category: string;
    items: string[];
  }
  

// Sample data
const projects: Project[] = [
  {
    title: "Project 1",
    description: "A full-stack web application with real-time features",
    techStack: ["React", "TypeScript", "Node.js", "Socket.io"],
    github: "https://github.com/example1",
    demo: "https://demo1.example.com"
  },
  {
    title: "Project 2",
    description: "Mobile-first responsive web application",
    techStack: ["React Native", "Redux", "Firebase"],
    github: "https://github.com/example2",
    demo: "https://demo2.example.com"
  },
  {
    title: "Project 3",
    description: "AI-powered data analytics dashboard",
    techStack: ["Python", "TensorFlow", "React", "D3.js"],
    github: "https://github.com/example3",
    demo: "https://demo3.example.com"
  }
];

const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"]
  },
  {
    category: "Tools",
    items: ["VS Code", "Figma", "Postman", "Jest", "Webpack"]
  }
];

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

const EnhancedPortfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check user's preferred color scheme
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  
  const { scrollYProgress } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Handle theme toggle
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark');
    }
  };

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Background Elements */}
      <ParticlesBackground />
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar 
        darkMode={darkMode}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        toggleTheme={toggleTheme}
        navItems={navItems}
      />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home">
          <EnhancedHeroSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Enhanced3DProjectCard 
                  key={index}
                  project={project}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <EnhancedSkillsSection 
            darkMode={darkMode}
            skills={skills}
          />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection darkMode={darkMode} />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            {/* Social Links */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-blue-500 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedPortfolio;