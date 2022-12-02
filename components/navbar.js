import Link from "next/link"

export default function Navbar() {
  return (
    <div className="bg-blue-600 max-w-screen-sm px-6 min-w-full fixed">
      <nav className="flex justify-around">
        <Link href="/" className="underline text-white">
          Home
        </Link>
        <Link href="/" className="underline text-white">
          About
        </Link>
        <Link href='/' className="underline text-white">
          Projects
        </Link>
      </nav>
    </div>
  )
}