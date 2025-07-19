import React from "react";
import { FC } from "react";
type SampleCardProps = {
  title: string;
};

export const SampleCard: FC<SampleCardProps> = (props) => {
  return (
    <div>
      {/* TODO: コンポーネントの実装 */}
      <h1>{props.title}</h1>
    </div>
  );
};
