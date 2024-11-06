interface GlowingButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }
  
  export const GlowingButton = ({ children, onClick, className = "" }: GlowingButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`relative inline-flex h-12 items-center px-6 py-3 
          bg-blue-600 dark:bg-blue-500 text-white rounded-xl
          hover:bg-blue-500 dark:hover:bg-blue-400
          transition-all duration-300 transform hover:-translate-y-1
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          dark:focus:ring-offset-gray-900 ${className}`}
      >
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 
          group-hover:opacity-20 transition-opacity duration-300" />
        {children}
      </button>
    );
  };