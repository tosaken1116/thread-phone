import { useState } from "react";
import { String, StringType } from "@/generated/strings/resources/string_pb";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCardRepository } from "../../repository";
import { buyStringMutation } from "@/domain/string/usecase";
import { useStringRepository } from "@/domain/string/repository";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// 仮モックデータ
const mockStrings: String[] = [
  {
    $typeName: "string_phone.strings.resources.String",
    id: "s1",
    name: "普通の糸",
    length: 1,
    durability: 100,
    type: StringType.A,
  },
  {
    $typeName: "string_phone.strings.resources.String",
    id: "s3",
    name: "ゴム製の糸",
    length: 3,
    durability: 100,
    type: StringType.C,
  },
  {
    $typeName: "string_phone.strings.resources.String",
    id: "s6",
    name: "カーボン製の糸",
    length: 6,
    durability: 100,
    type: StringType.F,
  },
  {
    $typeName: "string_phone.strings.resources.String",
    id: "s2",
    name: "金属製の糸",
    length: 2,
    durability: 100,
    type: StringType.B,
  },
  {
    $typeName: "string_phone.strings.resources.String",
    id: "s4",
    name: "ダイヤモンド製の糸",
    length: 4,
    durability: 100,
    type: StringType.D,
  },
  {
    $typeName: "string_phone.strings.resources.String",
    id: "s5",
    name: "オリハルコン製の糸",
    length: 5,
    durability: 100,
    type: StringType.E,
  },
];

export function StringTab() {
  const [selectedString, setSelectedString] = useState<StringType | null>(null);
  const client = useQueryClient();
  const repository = useStringRepository();
  const { mutate: purchaseString } = useMutation(
    buyStringMutation(repository, client)
  );

  const handleSelect = (type: StringType) => {
    setSelectedString((prev) => (prev === type ? null : type));
  };

  const handlePurchase = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedString) return;
    if (confirm(`StringType ${StringType[selectedString]} を購入`)) {
      purchaseString({
        $typeName: "string_phone.strings.rpc.BuyStringRequest",
        id: selectedString.toString(),
        length: 1,
      });
    }
    setTimeout(() => {
      alert(`${StringType[selectedString]} を ${length}m 購入しました`);
    }, 300);
  };

  return (
    <form onSubmit={handlePurchase}>
      <ul className="mt-4 grid grid-cols-3 gap-6 mx-auto">
        {mockStrings.map((string) => (
          <li
            key={string.id}
            className={`w-[180px] h-[150px] border rounded-[9px] cursor-pointer hover:scale-105 transition-all duration-300 flex items-center justify-center flex-col ${
              selectedString === string.type ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => handleSelect(string.type)}
          >
            <div className="text-lg font-semibold">{string.name}</div>
            <div className="text-sm">{string.length}m</div>
            <div className="text-sm">{string.durability}%</div>
          </li>
        ))}
      </ul>
      <Button
        type="submit"
        className="w-[180px] h-[50px] text-sm bg-green-500 text-white rounded-[9px] mx-auto mt-4 cursor-pointer"
        disabled={selectedString === null}
      >
        購入する
      </Button>
    </form>
  );
}
