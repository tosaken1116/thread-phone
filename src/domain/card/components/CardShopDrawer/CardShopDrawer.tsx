import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ShoppingCart } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CardTab } from "./CardTab";
import { StringTab } from "./StringTab";

export default function CardShopDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button className="grid place-items-center absolute top-4 right-4 w-16 h-16 text-white cursor-pointer rounded-full border-2 border-white bg-black">
          <ShoppingCart size={32} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="p-4 min-w-[600px]">
        <DrawerHeader>
          <DrawerTitle className="text-2xl">カード・糸を購入</DrawerTitle>
          <DrawerClose className="absolute right-4 top-4">✕</DrawerClose>
        </DrawerHeader>
        <Tabs defaultValue="card" className="mt-4">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="card">カード</TabsTrigger>
            <TabsTrigger value="string">糸</TabsTrigger>
          </TabsList>
          <TabsContent value="card">
            <CardTab />
          </TabsContent>
          <TabsContent value="string">
            <StringTab />
          </TabsContent>
        </Tabs>
      </DrawerContent>
    </Drawer>
  );
}
