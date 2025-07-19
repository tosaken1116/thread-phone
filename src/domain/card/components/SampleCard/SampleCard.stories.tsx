import type { Meta, StoryObj } from '@storybook/react';
import { SampleCard } from './SampleCard';

const meta = {
  title: 'Domain/Card/SampleCard',
  component: SampleCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // TODO: argTypesを定義してください
  },
} satisfies Meta<typeof SampleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // TODO: デフォルトのプロパティを設定してください
  },
};

export const Example: Story = {
  args: {
    // TODO: 例のプロパティを設定してください
  },
};