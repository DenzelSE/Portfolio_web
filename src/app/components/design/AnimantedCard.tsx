interface AnimatedCardProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export const AnimatedCard = ({ children, className = "" }: AnimatedCardProps) => {
    return (
      <div 
        className={`group relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 
          hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 
          hover:shadow-lg hover:-translate-y-1 ${className}`}
      >
        {children}
      </div>
    );
  };