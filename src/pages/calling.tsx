import CardShopDrawer from "@/domain/card/components/CardShopDrawer/CardShopDrawer";

export default function CallScreen() {
  const phoneNumber = "090-2733-2733";

  return (
    <div className="w-[calc(100vw-240px)] flex items-center justify-center h-screen bg-black border-4 border-sky-400 relative">
      {/* 電話番号表示 */}
      <div className="text-white text-3xl font-light absolute top-20">
        {phoneNumber}
      </div>
      {/* 通話終了ボタン */}
      <button
        className="bg-red-600 w-16 h-16 rounded-full border border-white"
        onClick={() => alert("通話を終了します")}
      />
      <CardShopDrawer />
    </div>
  );
}
