interface AnimatedCardProps {
    children: React.ReactNode;
    className?: string;
    darkMode: boolean;
  }
  
  export const AnimatedCard = ({ children, className = "", darkMode }: AnimatedCardProps) => {
    return (
      <div 
        className={`group relative rounded-xl border border-gray-200 dark:border-gray-800  dark:bg-opacity-50 p-6 
          hover:border-gray-300 ${darkMode ? 'bg-gray-900': 'bg-gray-50'} dark:hover:border-blue-700 transition-all duration-300 
          hover:shadow-lg hover:-translate-y-1 ${className}`}
      >
        {children}
      </div>
    );
  };