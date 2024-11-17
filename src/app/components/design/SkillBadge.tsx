interface SkillBadgeProps {
    name: string;
    icon?: React.ReactNode;
  }
  
  export const SkillBadge = ({ name, icon }: SkillBadgeProps) => {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full 
        bg-blue-100 dark:bg-blue-800 border border-gray-200 dark:border-gray-700
        hover:border-gray-300 text-blue-800 hover:shadow-lg dark:hover:border-gray-600 transition-colors">
        {icon}
        <span className="text-sm font-medium">{name}</span>
      </div>
    );
  };
  