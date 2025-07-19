import { generateQueryCreator } from "@/lib/keygen";
import { useStringRepository } from "../repository";

const stringQueryCreator = generateQueryCreator<ReturnType<typeof useStringRepository>>("string")

export const getStringsQuery = stringQueryCreator(
  "getStrings", 
  (repository) => repository.getStrings
)

export const getTemplateStringsQuery = stringQueryCreator(
  "getTemplateStrings",
  (repository) => repository.getTemplateStrings
)

