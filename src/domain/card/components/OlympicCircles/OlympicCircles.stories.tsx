import type { Meta, StoryObj } from "@storybook/react";
import { OlympicCircles } from "./OlympicCircles";

const meta = {
  title: "Domain/Card/OlympicCircles",
  component: OlympicCircles,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: "number",
    },
    overrideColor: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof OlympicCircles>;

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
    overrideColor: "red",
  },
};
