import Link from "next/link";

export default function Sidebar() {
  const menuItems = [
    {
      label: "Home",
      href: "/home",
    },
    // {
    //   label: "課金",
    //   href: "/telecard",
    // },
    {
      label: "通話",
      href: "/calling",
    },
  ];
  return (
    <aside className="w-[240px] border-r border-gray-300 p-4 flex flex-col">
      <div className="text-xl font-bold mb-6">
        <Link href="/">糸電話</Link>
      </div>
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link href={item.href}>
            <button className="border px-4 py-2 w-full text-left cursor-pointer">
              {item.label}
            </button>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
