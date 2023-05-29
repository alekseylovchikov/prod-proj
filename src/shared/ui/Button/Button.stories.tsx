import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultLight = Template.bind({});
DefaultLight.args = {
  children: 'Default',
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
  children: 'Default',
};

export const ClearLight = Template.bind({});
ClearLight.args = {
  theme: ThemeButton.CLEAR,
  children: 'Clear',
};

export const ClearDark = Template.bind({});
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
ClearDark.args = {
  theme: ThemeButton.CLEAR,
  children: 'Clear',
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  theme: ThemeButton.OUTLINE,
  children: 'Outline',
};

export const OutlineDark = Template.bind({});
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
OutlineDark.args = {
  theme: ThemeButton.OUTLINE,
  children: 'Outline',
};
