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

const telecards = [
  {
    id: 1,
    price: 100,
    component: <CardCheap scale={0.3} price={100} />,
  },
  {
    id: 2,
    price: 200,
    component: <CardCheap scale={0.3} price={200} />,
  },
  {
    id: 3,
    price: 500,
    component: <CardGeneral50 scale={0.3} />,
  },
  {
    id: 4,
    price: 1000,
    component: <CardGeneral105 scale={0.3} />,
  },
  {
    id: 5,
    price: 10000,
    component: <CardNagano1998 scale={0.3} />,
  },
  {
    id: 6,
    price: 10000,
    component: <CardTokyo1964 scale={0.3} />,
  },
];

export default function CardShopDrawer() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    if (selectedCard === id) {
      setSelectedCard(null);
      return;
    }
    setSelectedCard(id);
  };

  const handlePurchase = () => {
    if (selectedCard) {
      console.log(selectedCard);
    }
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
          {telecards.map((card) => (
            <li
              className={`w-[180px] h-[330px] cursor-pointer hover:scale-105 transition-all duration-300 ${
                selectedCard === card.id ? "bg-blue-500" : ""
              }`}
              key={card.id}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="w-[180px] h-[270px] rounded-[9px]">
                {card.component}
              </div>
              <div className="text-md text-center font-light">
                {card.price}円
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
