import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (storyFn: () => StoryFn) => <div className={`app ${theme}`}>{storyFn()}</div>;
