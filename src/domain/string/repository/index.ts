import { StringItemServiceClientCreator } from "@/generated/strings";
import { BuyStringRequest } from "@/generated/strings/rpc/string_pb";
import { useMemo } from "react";

export const useStringRepository = () => {
  const baseURL = useMemo(() => process.env.NEXT_PUBLIC_API_BASE_URL, []);
  if (!baseURL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
  }
  const client = useMemo(() => StringItemServiceClientCreator(baseURL), [baseURL]);
  const repository = useMemo(() => createStringRepository(client), [client]);
  return repository;
};

const createStringRepository = (client: ReturnType<typeof StringItemServiceClientCreator>) => {
  return {
    getStrings: async () => {
      const response = await client.getStrings({});
      return response.strings;
    },
    getTemplateStrings: async () => {
      return client.getTemplateStrings({});
    },
    buyString: async (req: BuyStringRequest) => {
      const response = await client.buyString(req);
      return response.string;
    }
  };
};
