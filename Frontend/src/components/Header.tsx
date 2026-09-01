import headerSvg from "../assets/header.svg";

export default function Header() {
  return (
    <header className="flex gap-1 p-3 items-center border-b border-zinc-50">
      <img src={headerSvg} alt="Header Icon" className="w-12 h-10" />
      <p className="font-[Fira Sans] text-[#FFFFFF] text-2xl font-bold">
        Taking Note
      </p>
    </header>
  );
}
