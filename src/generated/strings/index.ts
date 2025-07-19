import { StringItemService } from "@/generated/string_phone/strings_connect";
import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

export const StringItemServiceClientCreator = (baseUrl: string) => createClient(StringItemService, createConnectTransport({
  baseUrl,
}));
