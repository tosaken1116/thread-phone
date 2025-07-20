import CardShopDrawer from "@/domain/card/components/CardShopDrawer/CardShopDrawer";
import { watch } from "fs";
import { register } from "module";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  phoneNumber: string;
};

export default function Home() {
  const { register, setValue, handleSubmit, watch, trigger } =
    useForm<FormValues>({
      defaultValues: { phoneNumber: "" },
    });

  const input = watch("phoneNumber");

  const onSubmit = async (data: FormValues) => {
    const valid = await trigger("phoneNumber");
    if (!valid) return;
    if (confirm("通話を開始しますか？")) {
      handleSubmit(onSubmit)();
    }
  };

  const handleDial = (d: string) => {
    setValue("phoneNumber", input + d);
  };

  return (
    <div className="flex h-screen">
      {/* <TeleCard /> */}

      {/* Main content */}
      <main className="flex-1 p-8 flex flex-col items-center">
        {/* Top Home Button */}
        <button className="border px-6 py-4 mb-8 text-lg">Home</button>

        <div className="flex gap-8">
          {/* User Info */}
          <div className="border-2 border-purple-500 p-8 w-96 text-center">
            <h2 className="text-xl font-bold mb-4">あなたの基本情報</h2>
            <p className="text-lg font-semibold">name: kizuku</p>
            <p className="text-lg">tel: 090-273302733</p>
            <p>・</p>
            <p>・</p>
            <p>・</p>
          </div>

          {/* Dial Area */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border p-6 w-[400px]">
              <input
                type="tel"
                className="w-full border mb-4 p-2 text-center text-lg"
                value={input}
                readOnly
                {...register("phoneNumber", {
                  required: "電話番号を入力してください",
                  pattern: {
                    value: /^[0-9]{3,15}$/, // 必要に応じて調整
                    message: "無効な電話番号形式です",
                  },
                })}
              />
              <div className="grid grid-cols-3 gap-4">
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
                  "*",
                  "0",
                  "call",
                ].map((d) => (
                  <button
                    key={d}
                    type={d == "call" ? "submit" : "button"}
                    className="bg-gray-300 p-6 text-xl"
                    onClick={() => d !== "call" && handleDial(d)}
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
  );
}
