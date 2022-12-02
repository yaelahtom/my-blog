import Link from "next/link";
import { MdModeNight } from "react-icons/md";

export default function Navbar() {
  const darkStyle = `hover:ring-white`;

  // bg-zinc-900 min-w-screen-sm px-6 min-w-full fixed pt-4

  return (
    <div className="bg-zinc-900 min-w-screen-sm px-6 min-w-full fixed pt-4">
      <nav className="flex justify-around">
        <Link href="/" className="underline text-neutral-400">
          Home
        </Link>
        <Link href="/me" className="underline text-neutral-400">
          About
        </Link>
        <Link href="/" className="underline text-neutral-400">
          Blogs
        </Link>
        <Link href="/" className="underline text-neutral-400">
          Projects
        </Link>
        <button className={darkStyle}>
          <MdModeNight color="white" size="1.5rem" />
        </button>
      </nav>
      <div className="border-t border-neutral-800 mt-4"></div>
    </div>
  );
}
