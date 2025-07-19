import CardShopDrawer from "@/components/CardShopDrawer";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const handleDial = (value: string) => setInput((prev) => prev + value);

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
          <div className="border p-6 w-[400px]">
            <input
              type="tel"
              className="w-full border mb-4 p-2 text-center text-lg"
              value={input}
              readOnly
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
                  className="bg-gray-300 p-6 text-xl"
                  onClick={() =>
                    d == "call" ? alert("通話を開始します") : handleDial(d)
                  }
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <CardShopDrawer />
    </div>
  );
}
