import type { Meta, StoryObj } from "@storybook/react";
import { CardGeneral50 } from "./CardGeneral50";

const meta = {
  title: "Domain/Card/CardGeneral50",
  component: CardGeneral50,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: "number",
    },
  },
} satisfies Meta<typeof CardGeneral50>;

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
