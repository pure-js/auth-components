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
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Input Label',
    placeholder: 'Placeholder',
    id: 'input-label-id',
    type: 'text',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Input Label',
    placeholder: 'placeholder',
    id: 'button-label',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    placeholder: 'placeholder',
    id: 'button-label',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    placeholder: 'placeholder',
    id: 'button-label',
  },
};

export const Warning: Story = {
  args: {
    primary: true,
    label: 'Delete now',
    id: 'button-label',
    placeholder: 'placeholder',
    backgroundColor: 'red',
  },
};
