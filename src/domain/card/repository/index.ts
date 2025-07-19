import { CardServiceClientCreator } from "@/generated/cards";
import { BuyCardRequest } from "@/generated/cards/rpc/card_pb";
import { useMemo } from "react";


export const useCardRepository = ()=>{
  const baseURL = useMemo(() => process.env.NEXT_PUBLIC_API_BASE_URL, []);
  if (!baseURL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
  }
  const client = useMemo(() => CardServiceClientCreator(baseURL), [baseURL]);
  const repository  = useMemo(() => createCardRepository(client), [client]);
  return repository
}


 const createCardRepository = (client: ReturnType<typeof CardServiceClientCreator>) => {
  return {
    getCards: async () => {
      const response = await client.getCards({});
      return response.cards;
    },
    getTemplateCards: async()=>{
      return client.getTemplateCards({})
    },
    buyCard: async (req:BuyCardRequest) => {
      const response = await client.buyCard(req);
      return response;
    }
  };
};