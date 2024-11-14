import { ThemeToggle } from './ThemeToogle';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-opacity-70 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Denzel Selokela</h1>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </nav>
  );
};
export default Navbar;