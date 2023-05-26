import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'ui/AppLink',
  component: AppLink,
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: 'Primary',
  theme: AppLinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Primary',
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
  children: 'Secondary',
  theme: AppLinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Secondary',
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedLight = Template.bind({});
RedLight.args = {
  children: 'Red',
  theme: AppLinkTheme.RED,
};

export const RedDark = Template.bind({});
RedDark.args = {
  children: 'Red',
  theme: AppLinkTheme.RED,
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
