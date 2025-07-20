import { useState } from "react";
import { CardType, Card } from "@/generated/cards/resources/card_pb";
import { CardCheap } from "@/domain/card/components/CardCheap/CardCheap";
import { CardGeneral50 } from "@/domain/card/components/CardGeneral50/CardGeneral50";
import { CardGeneral105 } from "@/domain/card/components/CardGeneral105/CardGeneral105";
import { CardNagano1998 } from "@/domain/card/components/CardNagano1998/CardNagano1998";
import { CardTokyo1964 } from "@/domain/card/components/CardTokyo1964/CardTokyo1964";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { buyCardMutation } from "../../usecase";
import { useCardRepository } from "../../repository";

const telecards: Record<CardType, React.ReactNode> = {
  [CardType.UNSPECIFIED]: null,
  [CardType.A]: <CardCheap scale={0.3} price={100} />,
  [CardType.B]: <CardCheap scale={0.3} price={200} />,
  [CardType.C]: <CardGeneral50 scale={0.3} />,
  [CardType.D]: <CardGeneral105 scale={0.3} />,
  [CardType.E]: <CardNagano1998 scale={0.3} />,
  [CardType.F]: <CardTokyo1964 scale={0.3} />,
};

const mockCards: Card[] = [
  {
    $typeName: "string_phone.cards.resources.Card",
    id: "1",
    name: "A",
    credit: 100,
    type: CardType.A,
  },
  {
    $typeName: "string_phone.cards.resources.Card",
    id: "2",
    name: "B",
    credit: 200,
    type: CardType.B,
  },
  {
    $typeName: "string_phone.cards.resources.Card",
    id: "3",
    name: "C",
    credit: 300,
    type: CardType.C,
  },
  {
    $typeName: "string_phone.cards.resources.Card",
    id: "4",
    name: "D",
    credit: 400,
    type: CardType.D,
  },
  {
    $typeName: "string_phone.cards.resources.Card",
    id: "5",
    name: "E",
    credit: 500,
    type: CardType.E,
  },
  {
    $typeName: "string_phone.cards.resources.Card",
    id: "6",
    name: "F",
    credit: 600,
    type: CardType.F,
  },
];

export function CardTab() {
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const client = useQueryClient();
  const repository = useCardRepository();
  const { mutate: purchaseCard } = useMutation(
    buyCardMutation(repository, client)
  );

  const handleCardClick = (id: CardType) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  };

  const handlePurchase = () => {
    if (!selectedCard) return;
    if (confirm(`${CardType[selectedCard]} を購入`)) {
      purchaseCard({
        $typeName: "string_phone.cards.rpc.BuyCardRequest",
        name: selectedCard.toString(),
        credit: 100,
      });
    }
    setTimeout(() => {
      alert(`${CardType[selectedCard]} を 1枚 購入しました`);
    }, 300);
  };

  return (
    <>
      <ul className="mt-4 grid grid-cols-3 gap-6 mx-auto">
        {mockCards.map((card) => (
          <li
            key={card.id}
            className={`w-[186px] h-[336px] cursor-pointer hover:scale-105 transition-all duration-300}`}
            onClick={() => handleCardClick(card.type)}
          >
            <div
              className={`w-[186px] h-[276px] rounded-[9px] border-3 ${
                selectedCard === card.type
                  ? " border-blue-500"
                  : " border-transparent"
              }`}
            >
              {telecards[card.type]}
            </div>
            <div className="text-md text-center font-light">
              {card.credit}円
            </div>
          </li>
        ))}
      </ul>
      <button
        className="w-[180px] h-[50px] text-sm bg-blue-500 text-white rounded-[9px] mx-auto mt-4 cursor-pointer"
        onClick={handlePurchase}
        disabled={!selectedCard}
      >
        購入する
      </button>
    </>
  );
}
