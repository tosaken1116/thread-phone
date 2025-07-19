import type { Meta, StoryObj } from "@storybook/react";
import { CardCheap } from "./CardCheap";

const meta = {
  title: "Domain/Card/CardCheap",
  component: CardCheap,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: "number",
    },
    price: {
      control: "number",
    },
  },
} satisfies Meta<typeof CardCheap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    scale: 0.5,
    price: 100,
  },
};

export const Example: Story = {
  args: {
    scale: 0.5,
    price: 100,
  },
};
