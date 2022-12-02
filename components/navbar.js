import Link from "next/link";
import Image from "next/image";
import { CgDarkMode } from "react-icons/cg";

export default function Navbar() {
  const darkStyle = `hover:ring-white`;

  return (
    <div className="bg-zinc-900 max-w-screen-sm px-6 min-w-full fixed pt-4">
      <nav className="flex justify-around">
        <Link href="/" className="underline text-neutral-400">
          Home
        </Link>
        <Link href="/me" className="underline text-neutral-400">
          About
        </Link>
        <Link href="/" className="underline text-neutral-400">
          Projects
        </Link>
        <button className={darkStyle}>
          <CgDarkMode size="1.5rem" />
        </button>
      </nav>
      <div className="border-t border-neutral-800 mt-4"></div>
    </div>
  );
}
