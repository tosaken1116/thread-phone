import { UserService } from "@/generated/string_phone/user_connect";
import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

export const UserServiceClientCreator = (baseUrl: string) => createClient(UserService, createConnectTransport({
  baseUrl,
}));
