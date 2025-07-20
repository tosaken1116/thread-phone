import { UserServiceClientCreator } from "@/generated/user";
import { SignUpRequest } from "@/generated/user/rpc/user_pb";
import { useMemo } from "react";

export const useUserRepository = () => {
  const baseURL = useMemo(() => process.env.NEXT_PUBLIC_API_BASE_URL, []);
  if (!baseURL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
  }
  const token = useMemo(() => localStorage.getItem("token"), []);
  const client = useMemo(() => UserServiceClientCreator(baseURL), [baseURL]);
  const repository = useMemo(() => createUserRepository(client,token!), [client]);
  return repository;
};

const createUserRepository = (client: ReturnType<typeof UserServiceClientCreator>,token:string) => {
  return {
    signUp: async (req: SignUpRequest) => {
      const response = await client.signUp(req,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.me) {
        throw new Error("User creation failed");
      }
      return response;
    },
    getMe:async ()=>{
      const response = await client.getMe({},{
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.me) {
        throw new Error("User retrieval failed");
      }
      return response.me;
    }
  };
};
