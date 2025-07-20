import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/components/ui/card";

const meta = {
  title: "Domain/Card/SampleCard",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // TODO: argTypesを定義してください
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Sample Card Title",
  },
};

export const Example: Story = {
  args: {
    title: "Example Card Title",
  },
};
