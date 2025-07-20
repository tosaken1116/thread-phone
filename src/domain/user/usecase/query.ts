import { generateQueryCreator } from "@/lib/keygen"
import { useUserRepository } from "../repository";
const userQueryCreator = generateQueryCreator<ReturnType<typeof useUserRepository>>("user")

export const getUserQuery = userQueryCreator(
    "getUser",
    (repository) => repository.getMe
)