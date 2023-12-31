import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Form/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Primary input Label',
    placeholder: 'Placeholder',
    id: 'input-label-id',
    type: 'text',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary input label',
    placeholder: 'Placeholder',
    id: 'button-label',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large input label',
    placeholder: 'Placeholder',
    id: 'button-label',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium input label',
    id: 'button-label',
    placeholder: 'Placeholder',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Medium input label',
    id: 'button-label',
    placeholder: 'Placeholder',
    validationMessage: 'Username is already taken',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Button',
    placeholder: 'placeholder',
    id: 'button-label',
  },
};
