import { generateQueryCreator } from "@/lib/keygen";
import { useCardRepository } from "../repository";

const cardQueryCreator = generateQueryCreator<ReturnType<typeof useCardRepository>>("card")

export const getCardsQuery = cardQueryCreator(
  "getCards", 
  (repository) => repository.getCards
)

export const getTemplateCardsQuery = cardQueryCreator(
  "getTemplateCards",
  (repository) => repository.getTemplateCards
)

