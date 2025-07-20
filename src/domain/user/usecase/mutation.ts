import { generateMutationCreator } from "@/lib/keygen";
import { BuyStringRequest, BuyStringResponse } from "@/generated/strings/rpc/string_pb";
import { useUserRepository } from "../repository";
import { SignUpRequest } from "@/generated/user/rpc/user_pb";

const userMutationCreator = generateMutationCreator<ReturnType<typeof useUserRepository>>()

export const signUpMutation = userMutationCreator<Awaited<ReturnType<ReturnType<typeof useUserRepository>["signUp"]>>, SignUpRequest>(
  async (repository, _, params) => {
    const res = await repository.signUp(params)
    localStorage.setItem("token", res.token)
    return res
  }
)

