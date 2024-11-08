export const FloatingNav = () => {
    return (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 px-4 py-2 rounded-full 
          bg-gray-50 dark:bg-gray-800 bg-opacity-50 border border-gray-200 dark:border-gray-700
          shadow-lg backdrop-blur-md">
          <a href="#home" className="p-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</a>
          <a href="#projects" className="p-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projects</a>
          <a href="#skills" className="p-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="p-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    );
  };