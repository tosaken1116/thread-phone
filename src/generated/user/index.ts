import { UserService } from "@/generated/UserServiceUserService_pb";
import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

export const UserServiceClientCreator = (baseUrl: string) => createClient(UserService, createConnectTransport({
  baseUrl,
}));
