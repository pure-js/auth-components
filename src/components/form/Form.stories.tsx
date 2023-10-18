import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './Form';
import Input from '@/components/input';

import { Primary, Medium } from '@/components/input/Input.stories';
// import * as ButtonStories from '@/components/button/Button.stories';

const meta = {
  title: 'Form',
  component: Form,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof Form>;

const FormTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <Form {...args}>
        <Input {...Primary.args} />
        <Input {...Medium.args} />
      </Form>
    );
  },
};

export const Login: Story = {
  ...FormTemplate,
  args: {},
};
