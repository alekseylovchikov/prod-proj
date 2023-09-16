import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Modal } from './Modal';

export default {
  title: 'ui/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  isOpen: true,
  children: 'Default',
};

export const DarkModal = Template.bind({});
DarkModal.args = {
  isOpen: true,
  children: 'Default',
};
DarkModal.decorators = [ThemeDecorator(Theme.DARK)];
