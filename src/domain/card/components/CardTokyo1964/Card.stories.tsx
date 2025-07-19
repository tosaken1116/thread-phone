import type { Meta, StoryObj } from "@storybook/react";
import { CardTokyo1964 } from "./CardTokyo1964";

const meta = {
  title: "Domain/Card/CardTokyo1964",
  component: CardTokyo1964,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: "number",
    },
  },
} satisfies Meta<typeof CardTokyo1964>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    scale: 0.5,
  },
};

export const Example: Story = {
  args: {
    scale: 0.5,
  },
};
