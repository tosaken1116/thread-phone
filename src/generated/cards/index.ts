import { CardService } from "@/generated/cards/card_pb";
import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

export const CardServiceClientCreator = (baseUrl: string) => createClient(CardService, createConnectTransport({
  baseUrl,
}));
