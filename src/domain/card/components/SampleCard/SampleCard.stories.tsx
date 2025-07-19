import type { Meta, StoryObj } from "@storybook/react";
import { SampleCard } from "./SampleCard";

const meta = {
  title: "Domain/Card/SampleCard",
  component: SampleCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // TODO: argTypesを定義してください
  },
} satisfies Meta<typeof SampleCard>;

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
