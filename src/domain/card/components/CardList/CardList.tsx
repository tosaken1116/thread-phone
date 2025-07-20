import { useState } from "react";
import { CardCheap } from "@/domain/card/components/CardCheap/CardCheap";
import { CardGeneral50 } from "@/domain/card/components/CardGeneral50/CardGeneral50";
import { CardGeneral105 } from "@/domain/card/components/CardGeneral105/CardGeneral105";
import { CardNagano1998 } from "@/domain/card/components/CardNagano1998/CardNagano1998";
import { CardTokyo1964 } from "@/domain/card/components/CardTokyo1964/CardTokyo1964";
import { CardType } from "@/generated/cards/resources/card_pb";
import { useFormContext } from "react-hook-form";
import { FormValues } from "@/pages/home";

type Card = {
  id: string;
  name: string;
  credit: number;
  createdAt?: Date;
  updatedAt?: Date;
  type: CardType;
};

const telecards: Record<CardType, React.ReactNode> = {
  [CardType.UNSPECIFIED]: null,
  [CardType.A]: <CardCheap scale={0.15} price={100} />,
  [CardType.B]: <CardCheap scale={0.15} price={200} />,
  [CardType.C]: <CardGeneral50 scale={0.15} />,
  [CardType.D]: <CardGeneral105 scale={0.15} />,
  [CardType.E]: <CardNagano1998 scale={0.15} />,
  [CardType.F]: <CardTokyo1964 scale={0.15} />,
};

type Props = {
  cards: Card[];
};

const mockCards: Card[] = [
  {
    id: "3",
    name: "C",
    credit: 300,
    type: CardType.C,
  },
  {
    id: "4",
    name: "D",
    credit: 400,
    type: CardType.D,
  },
  {
    id: "5",
    name: "E",
    credit: 500,
    type: CardType.E,
  },
  {
    id: "6",
    name: "F",
    credit: 600,
    type: CardType.F,
  },
];
export default function CardList({ cards }: Props) {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<FormValues>();
  const cardId = watch("cardId");

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">カード一覧</h2>
      {errors.cardId?.message && (
        <p className="text-red-500 text-sm">{errors.cardId.message}</p>
      )}
      <ul className="flex gap-4">
        {mockCards.map((card) => (
          <li
            key={card.id}
            className={`w-[90px] h-[135px] cursor-pointer hover:scale-105 transition-all duration-300 rounded-lg p-1 ${
              card.id === cardId ? "bg-blue-500" : "bg-white"
            }`}
            onClick={() => {
              setValue("cardId", card.id); // 💡 フォームに反映
            }}
          >
            <div className="w-[90px] h-[135px] rounded-[9px] mx-auto">
              {telecards[card.type]}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
