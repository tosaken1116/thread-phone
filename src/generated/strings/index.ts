import { StringItemService } from "@/generated/strings/string_pb";
import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

export const StringItemServiceClientCreator = (baseUrl: string) => createClient(StringItemService, createConnectTransport({
  baseUrl,
}));
