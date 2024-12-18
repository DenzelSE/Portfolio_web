"use client";

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectSections';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { FloatingNav } from './components/design/FloatingNav';
import { GradientBackground } from './components/design/GradientBackground';
import { Footer } from './components/design/Footer';
import { Separator } from "@/components/ui/separator"
import { DynamicBackground } from './components/design/dynamic-background';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <main>
      <GradientBackground />
      <DynamicBackground/>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />``
      <HeroSection />
      <Separator/>
      <ProjectsSection darkMode={darkMode} />
      <SkillsSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
      <FloatingNav />
      </main>
      <Footer/>
    </div>
    
  );
}