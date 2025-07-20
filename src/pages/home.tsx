import CardList from "@/domain/card/components/CardList/CardList";
import CardShopDrawer from "@/domain/card/components/CardShopDrawer/CardShopDrawer";
import StringList from "@/domain/string/components/StringList/StringList";
import { User } from "@/generated/user/resources/user_pb";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export type FormValues = {
  phoneNumber: string;
  stringId: string;
  cardId: string;
};

const mockUser: User = {
  $typeName: "string_phone.user.resources.User",
  id: "1",
  name: "kizuku",
  phoneNumber: "090-2733-2733",
  credit: 1000,
};

export default function Home() {
  const methods = useForm<FormValues>({
    defaultValues: { phoneNumber: "", stringId: "", cardId: "" },
    mode: "onChange",
  });
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = methods;
  useForm<FormValues>({
    defaultValues: { phoneNumber: "", stringId: "", cardId: "" },
  });

  const input = watch("phoneNumber");

  const onSubmit = async (data: FormValues) => {
    const valid = await trigger("phoneNumber");
    if (!valid) return;
    if (confirm("通話を開始しますか？")) {
      console.log(data);
      // handleSubmit(onSubmit)();
    }
  };

  const handleDial = (d: string) => {
    setValue("phoneNumber", input + d);
  };

  return (
    <FormProvider {...methods}>
      <div className="w-[calc(100vw-240px)] mx-auto flex justify-center items-center min-h-screen bg-gray-50 px-4">
        <main className="w-full p-6">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* User Info */}
            <div className="bg-white shadow rounded-lg p-6 w-full max-w-sm">
              <h2 className="text-xl font-bold mb-4">あなたの基本情報</h2>
              <p className="text-lg font-semibold">name: {mockUser.name}</p>
              <p className="text-lg">tel: {mockUser.phoneNumber}</p>
              <p className="text-lg">credit: {mockUser.credit}</p>
            </div>

            {/* Dial Area */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col md:flex-row gap-6"
            >
              <div className="flex flex-col gap-4">
                <StringList />
                <input
                  type="hidden"
                  {...register("stringId", {
                    required: "糸を選択してください",
                  })}
                />

                <CardList cards={[]} />
                <input
                  type="hidden"
                  {...register("cardId", {
                    required: "カードを選択してください",
                  })}
                />
              </div>

              <div className="bg-[#82dc64] shadow rounded-lg p-6 w-[300px]">
                <input
                  type="tel"
                  className="w-full border mb-1 p-2 text-center bg-[#debf87] text-lg rounded"
                  value={input}
                  readOnly
                  {...register("phoneNumber", {
                    required: "電話番号を入力してください",
                    pattern: {
                      value: /^[0-9]{3,15}$/,
                      message: "無効な電話番号形式です",
                    },
                  })}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "del",
                    "0",
                    "call",
                  ].map((d) => (
                    <button
                      key={d}
                      type={d === "call" ? "submit" : "button"}
                      className="bg-[#363340] hover:bg-gray-300 transition h-[80px] w-[80px] text-[50px] text-[#ecc858] font-medium border-4 border-white rounded-full"
                      onClick={() => {
                        if (d === "call") return;
                        if (d === "del")
                          setValue("phoneNumber", input.slice(0, -1));
                        else handleDial(d);
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </main>

        <CardShopDrawer />
      </div>
    </FormProvider>
  );
}
