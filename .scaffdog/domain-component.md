---
name: "domain-component"
root: "."
output: "."
questions:
  domain:
    message: "ドメイン名を選択してください"
    choices: ["card", "string", "user"]
  name:
    message: "コンポーネント名を入力してください"
---

# `src/domain/{{ inputs.domain }}/components/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```tsx
import React from 'react';

interface {{ inputs.name | pascal }}Props {
  // TODO: プロパティを定義してください
}

export const {{ inputs.name | pascal }}: React.FC<{{ inputs.name | pascal }}Props> = (props) => {
  return (
    <div>
      {/* TODO: コンポーネントの実装 */}
      <h1>{{ inputs.name | pascal }}</h1>
    </div>
  );
};

```

# `src/domain/{{ inputs.domain }}/components/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

const meta = {
  title: 'Domain/{{ inputs.domain | pascal }}/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // TODO: argTypesを定義してください
  },
} satisfies Meta<typeof {{ inputs.name | pascal }}>;

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
```

# `src/domain/{{ inputs.domain }}/components/{{ inputs.name | pascal }}/index.ts`

```typescript
export { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';
```
