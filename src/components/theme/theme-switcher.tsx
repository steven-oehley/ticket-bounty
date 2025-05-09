import { useTheme } from 'next-themes';

import { LucideMoonStar, LucideSun } from 'lucide-react';

import { Button } from '../ui/button';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <Button variant="ghost" onClick={handleThemeChange}>
        {theme === 'dark' ? (
          <LucideSun className="animate-in fade-in zoom-in duration-300" />
        ) : (
          <LucideMoonStar className="animate-in fade-in zoom-in duration-300" />
        )}
        {/*  accessibility */}
        <span className="sr-only">Toggle Theme</span>
      </Button>
    </div>
  );
};
export default ThemeSwitcher;
