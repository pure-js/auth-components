import type { Meta, StoryObj } from '@storybook/react';

import { SortableTable } from './SortableTable';

const meta = {
  title: 'SortableTable',
  component: SortableTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof SortableTable>;

export default meta;
type Story = StoryObj<typeof SortableTable>;

// const SortableTableTemplate: Story = {
//   render: ({ ...args }) => {
//     return <SortableTable {...args} />;
//   },
// };

// export const SortableTableBasic: Story = {
//   ...SortableTableTemplate,
//   args: {},
// };

export const SortableTableBasic: Story = {
  args: {
    headings: ['Date', 'Title', 'Amount', 'Distance'],
  },
};
