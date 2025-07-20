import { String, StringType } from "@/generated/strings/resources/string_pb";
import { FormValues } from "@/pages/home";
import { timestampDate, Timestamp } from "@bufbuild/protobuf/wkt";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const stringTypeMap = {
  [StringType.UNSPECIFIED]: "不明",
  [StringType.A]: "綿",
  [StringType.B]: "金属",
  [StringType.C]: "木",
  [StringType.D]: "石",
  [StringType.E]: "鉄",
  [StringType.F]: "ナイロン",
};

const mockStrings: String[] = [
  {
    $typeName: "string_phone.strings.resources.String",
    id: "1",
    name: "普通の糸",
    length: 2,
    durability: 80,
    type: StringType.A,
  },
  {
    $typeName: "string_phone.strings.resources.String",
    id: "2",
    name: "金属製の糸",
    length: 5,
    durability: 95,
    type: StringType.B,
  },
];

export default function StringList() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const {
    setValue,
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <div className="max-w-3xl p-4">
      <h1 className="text-2xl font-bold mb-4">持っている糸</h1>
      {errors.stringId && (
        <p className="text-red-500 text-sm">{errors.stringId.message}</p>
      )}
      <ul className="space-y-2">
        {mockStrings.map((s) => (
          <li
            key={s.id}
            onClick={() => {
              setSelectedId(s.id);
              setValue("stringId", s.id); // 💡 フォームに反映
            }}
            className={`border p-4 rounded cursor-pointer ${
              selectedId === s.id ? "bg-blue-100 border-blue-500" : "bg-white"
            }`}
          >
            <div className="font-semibold">
              {s.name} ({stringTypeMap[s.type]})
            </div>
            <div className="text-sm text-gray-600">
              糸の長さ: {s.length} / 残り耐久力: {s.durability}
            </div>
          </li>
        ))}
      </ul>
      {errors.stringId && (
        <p className="text-red-500 text-sm">{errors.root?.message}</p>
      )}
    </div>
  );
}
