import Link from "next/link";
import { MdModeNight } from "react-icons/md";

export default function Navbar() {

  return (
    <div className="bg-zinc-900 min-w-screen-sm px-6 min-w-full fixed pt-4">
      <nav className="flex justify-around">
        <Link href="/" className="underline text-neutral-400">
          Home
        </Link>
        <Link href="/posts" className="underline text-neutral-400">
          Blog
        </Link>
        <Link href="/projects" className="underline text-neutral-400">
          Projects
        </Link>
        <Link href="/me" className="underline text-neutral-400">
          About
        </Link>
        <button>
          <MdModeNight color="white" size="1.5rem" />
        </button>
      </nav>
      <div className="border-t border-neutral-800 mt-4"></div>
    </div>
  );
}
