import { useTheme, Theme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';

import DarkTheme from 'shared/assets/icons/dark.svg';
import LightTheme from 'shared/assets/icons/light.svg';

import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={classNames(cls.ThemeSwitcher, {}, [className])} theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
      {theme === Theme.DARK ? <LightTheme /> : <DarkTheme />}
    </Button>
  );
};
