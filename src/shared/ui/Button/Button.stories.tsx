import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

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

export const ClearLight = Template.bind({});
ClearLight.args = {
  theme: ButtonTheme.CLEAR,
  children: 'Clear',
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Outline',
};

export const OutlineLightSizeL = Template.bind({});
OutlineLightSizeL.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Outline size L',
  size: ButtonSize.L,
};

export const OutlineLightSizeXL = Template.bind({});
OutlineLightSizeXL.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Outline size XL',
  size: ButtonSize.XL,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  theme: ButtonTheme.BACKGROUND,
  children: 'Background',
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  children: 'Background inverted',
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  theme: ButtonTheme.BACKGROUND,
  children: 'M',
  size: ButtonSize.M,
  square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  theme: ButtonTheme.BACKGROUND,
  children: 'L',
  size: ButtonSize.L,
  square: true,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  theme: ButtonTheme.BACKGROUND,
  children: 'XL',
  size: ButtonSize.XL,
  square: true,
};
