import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const ThemeToggle = ({ darkMode, setDarkMode }: ThemeToggleProps) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};