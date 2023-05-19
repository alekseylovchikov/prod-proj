import { useTheme, Theme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';

import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import LightTheme from 'shared/assets/icons/theme-light.svg';

import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}
// TODO move to widgets
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <LightTheme /> : <DarkTheme />}
    </Button>
  );
};
