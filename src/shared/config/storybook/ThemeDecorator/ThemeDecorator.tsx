import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (storyFn: () => StoryFn) => {
  const className = `app ${theme}`;

  return (
    <ThemeProvider initialTheme={theme}>
      <div className={className}>{storyFn()}</div>
    </ThemeProvider>
  );
};
