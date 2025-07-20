import { generateMutationCreator } from "@/lib/keygen";
import { useStringRepository } from "../repository";
import { BuyStringRequest, BuyStringResponse } from "@/generated/strings/rpc/string_pb";
import { getStringsQuery } from "./query";

const stringMutationCreator = generateMutationCreator<ReturnType<typeof useStringRepository>>()

export const buyStringMutation = stringMutationCreator<Awaited<ReturnType<ReturnType<typeof useStringRepository>["buyString"]>>, BuyStringRequest>(
  async (repository, queryClient, params) => {
    const res = await repository.buyString(params)
    await queryClient.invalidateQueries(getStringsQuery.keygen.item())
    return res
  }
)

