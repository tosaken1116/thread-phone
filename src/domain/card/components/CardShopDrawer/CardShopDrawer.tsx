import { useState } from "react";
import { CardNagano1998 } from "@/domain/card/components/CardNagano1998/CardNagano1998";
import { CardTokyo1964 } from "@/domain/card/components/CardTokyo1964/CardTokyo1964";
import { CardCheap } from "@/domain/card/components/CardCheap/CardCheap";
import { CardGeneral50 } from "@/domain/card/components/CardGeneral50/CardGeneral50";
import { CardGeneral105 } from "@/domain/card/components/CardGeneral105/CardGeneral105";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ShoppingCart } from "lucide-react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getTemplateCardsQuery } from "../../usecase";
import { useCardRepository } from "../../repository";
import { Card, CardType } from "@/generated/cards/resources/card_pb";

const telecards: Record<CardType, React.ReactNode> = {
  [CardType.UNSPECIFIED]: null,
  [CardType.A]: <CardCheap scale={0.3} price={100} />,
  [CardType.B]: <CardCheap scale={0.3} price={200} />,
  [CardType.C]: <CardGeneral50 scale={0.3} />,
  [CardType.D]: <CardGeneral105 scale={0.3} />,
  [CardType.E]: <CardNagano1998 scale={0.3} />,
  [CardType.F]: <CardTokyo1964 scale={0.3} />,
} as const;

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

export default function CardShopDrawer() {
  // const repository = useCardRepository();
  // const { data } = useSuspenseQuery(getTemplateCardsQuery.query(repository));

  const data = {
    templateStrings: mockCards,
  };

  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);

  const handleCardClick = (id: CardType) => {
    if (selectedCard === id) {
      setSelectedCard(null);
      return;
    }
    setSelectedCard(id);
  };

  const handlePurchase = () => {
    if (!selectedCard) return;
    // const { mutate: purchaseCard } = useMutationState();
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button className="grid place-items-center absolute top-4 right-4 w-16 h-16 text-white cursor-pointer rounded-full border-2 border-white bg-black">
          <ShoppingCart size={32} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="p-4 min-w-[600px]">
        <DrawerHeader>
          <DrawerTitle>クレジット購入</DrawerTitle>
          <DrawerClose className="absolute right-4 top-4">✕</DrawerClose>
        </DrawerHeader>
        <ul className="mt-4 grid grid-cols-3 gap-6 mx-auto">
          {data.templateStrings.map((card) => (
            <li
              className={`w-[180px] h-[330px] cursor-pointer hover:scale-105 transition-all duration-300 ${
                selectedCard === card.type ? "bg-blue-500" : ""
              }`}
              key={card.id}
              onClick={() => handleCardClick(card.type)}
            >
              <div className="w-[180px] h-[270px] rounded-[9px]">
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
          onClick={() => handlePurchase()}
          disabled={!selectedCard}
        >
          購入する
        </button>
      </DrawerContent>
    </Drawer>
  );
}
