import Link from "next/link";
import { MdModeNight } from "react-icons/md";
import classnames from 'classnames'
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter()
  const href = router.asPath
  return (
    <div className="bg-zinc-900 min-w-screen-sm px-6 min-w-full fixed pt-4">
      <nav className="flex justify-around">
        <Link href="/" className={classnames(" text-neutral-400", { 'decoration-2 underline underline-offset-8 decoration-red-400': href === '/' })}>
          Home
        </Link>
        <Link href="/posts" className={classnames("text-neutral-400", { 'decoration-2 underline underline-offset-8 decoration-green-400': href === '/posts' })}>
          Blog
        </Link>
        <Link href="/projects" className={classnames("text-neutral-400 ", { 'decoration-2 underline underline-offset-8 decoration-yellow-400': href === '/projects' })}>
          Projects
        </Link>
        <Link href="/me" className={classnames(" text-neutral-400 ", { 'decoration-2 underline underline-offset-8 decoration-violet-400': href === '/me' })}>
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
