import type { Meta, StoryObj } from "@storybook/react";
import { CardGeneral105 } from "./CardGeneral105";

const meta = {
  title: "Domain/Card/CardGeneral105",
  component: CardGeneral105,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: "number",
    },
  },
} satisfies Meta<typeof CardGeneral105>;

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
