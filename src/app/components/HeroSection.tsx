import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';
import { GlowingButton } from './design/GlowingButton';
import { GradientBackground } from './design/GradientBackground';

export const HeroSection = () => {
  return (
    <section id="home" className="relative max-w-6xl mx-auto px-4 py-24">
      <GradientBackground />
      
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          {/* Available for hire badge */}
          <div className="inline-block animate-bounce-slow">
            <span className="text-sm font-medium px-4 py-2 rounded-full 
              bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
              Available for hire
            </span>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-r from-gray-900 to-gray-100 dark:from-white dark:to-gray-900">
              Denzel Selokela
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200">
              Full Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Building robust and scalable applications with modern technologies.
            Passionate about clean code and user experience.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex gap-6 py-4">
            <Code2 className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <span className="font-mono">{'{'}</span>
              <span className="text-blue-500 dark:text-blue-400">React</span>
              <span className="text-red-500 dark:text-blue-400">Java</span>
              <span className="text-fuchsia-500 dark:text-fuchsia-400">Node</span>
              <span className="text-green-500 dark:text-green-400">TypeScript</span>
              <span className="font-mono">{'}'}</span>
            </div>
            <Code2 className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <GlowingButton>
              View Projects
            </GlowingButton>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 
              text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 
              transition-colors">
              Contact Me
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-4">
            <a href="https://github.com/DenzelSE" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/denzel-selokela" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="denzelselokela@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="relative aspect-square max-w-md mx-auto md:ml-auto">
          {/* Glowing background effect */}
          {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 animate-pulse blur-xl opacity-50" /> */}
          
          {/* Main image container */}
          {/* <div className="relative aspect-square dark:border-gray-800 overflow-hidden shadow-2xl"> */}
            <Image
              src={"/linkedinRe.png"}
              alt="hero.jpg"
              width={400}
              height={400}
              className="w-full h-full object-cover transform hover:scale-105 scaleX-[-1] transition-transform duration-500"
            />
            
          {/* </div> */}
          
          {/* Decorative elements */}
          {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-fuchsia-500 rounded-full blur opacity-30 group-hover:opacity-40 transition duration-500" /> */}
          {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-fuchsia-500/20" /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;