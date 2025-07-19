import React from "react";
import { FC } from "react";
// import { useSuspenseQuery } from "@tanstack/react-query"
// import { getTemplateCardsQuery } from "../../usecase";
// import { useCardRepository } from "../../repository";
type SampleCardProps = {
  title: string;
};

export const SampleCard: FC<SampleCardProps> = (props) => {
  // const repository = useCardRepository()
  // const { data } = useSuspenseQuery(getTemplateCardsQuery.query(repository))
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};
