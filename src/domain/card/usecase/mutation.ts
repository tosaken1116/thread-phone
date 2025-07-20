import { generateMutationCreator } from "@/lib/keygen";
import { useCardRepository } from "../repository";
import { BuyCardRequest, BuyCardResponse } from "@/generated/cards/rpc/card_pb";
import { getCardsQuery } from "./query";

const cardMutationCreator = generateMutationCreator<ReturnType<typeof useCardRepository>>()

export const buyCardMutation = cardMutationCreator<BuyCardResponse, BuyCardRequest>(
  async (repository, queryClient, params) => {
    const res = await repository.buyCard(params)
    await queryClient.invalidateQueries(getCardsQuery.keygen.item())
    return res
  }
)

