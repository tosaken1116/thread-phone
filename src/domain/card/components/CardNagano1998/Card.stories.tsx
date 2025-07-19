import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./CardNagano1998";
import { SampleCard } from ".";

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
    // TODO: デフォルトのプロパティを設定してください
  },
};

export const Example: Story = {
  args: {
    // TODO: 例のプロパティを設定してください
  },
};
