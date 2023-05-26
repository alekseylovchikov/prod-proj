import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';

export const StyleDecorator = (storyFn: () => StoryFn) => storyFn();
