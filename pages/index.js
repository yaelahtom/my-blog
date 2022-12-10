import Head from "next/head";
import Image from "next/image";
import ppic from "../public/pasfoto.jpeg";
import Link from "next/link";
import { FaGithubAlt, FaSpotify } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Home() {
  return (
    // bg
    <div className="bg-zinc-900 min-h-screen mx-auto max-w-screen-sm">
      <Head>
        <title>Tomi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="max-w-screen-sm mx-auto">
        {/* image ppic */}
        <div className="flex items-center justify-center ">
          <Image
            src={ppic}
            alt="gw si author"
            className="rounded border-4 border-neutral-300 bg-cover bg-center bg-no-repeat w-28 mt-24"
            placeholder="blur"
          />
        </div>
        {/* name */}
        <div className="flex justify-center mt-4">
          <Link href="/me" className=" text-neutral-300 font-bold text-4xl">
            Tomi
          </Link>
        </div>
        <div className="flex justify-center mt-2">
          <p className="text-neutral-300 animate-pulse">Hello and thanks for visiting! </p>
        </div>
        {/* socials */}
        <div className="flex justify-center mt-4 gap-5">
          <a href="https://github.com/yaelahtom">
            <FaGithubAlt color="white" size="22" />
          </a>
          <a href="mailto:amandipthandi@gmail.com">
            <MdOutlineAlternateEmail color="white" size="22" />
          </a>
          <a href="https://open.spotify.com/user/0iiadr7t2y2iwloujsu5kqxar?si=3dddca2369a34785">
            <FaSpotify color="white" size="22" />
          </a>
        </div>
      </header>
      <br />
      {/* line */}
      <div className="max-w-screen-sm px-6 mx-auto">
        <div className="border-t border-neutral-300"></div>
        {/* posts list */}
        <div className="pt-12">
          <Link className="text-neutral-300 font-bold text-xl hover:text-violet-400" href='posts/burnout'>
            Working with Burnout
          </Link>
          <p className="text-neutral-300 text-sm">December 3, 2022</p>
          <p className="mt-3 text-neutral-500">Thing that affects me the most is burnout, which is honestly something I&apos;ve been dealing with on and off for a long time.
          </p>
          <p className="mt-2"></p>
          <Link href="posts/burnout" className="leading-tight text-neutral-300 inline-block border-b border-gray-600 hover:text-neutral-500 hover:border-neutral-500 transition-colors">Read More</Link>
        </div>

        <div className="pt-12">
          <Link className="text-neutral-300 font-bold text-xl hover:text-violet-400" href='posts/the-zone-of-optimal-learning'>
            The Zone of Optimal Learning
          </Link>
          <p className="text-neutral-300 text-sm">December 10, 2022</p>
          <p className="mt-3 text-neutral-500">A key strategy for getting better at things is hill-climbing. The idea is simple: try different things, keep doing the things that work, stop doing those that don&apos;t.
          </p>
          <p className="mt-2"></p>
          <Link href="posts/the-zone-of-optimal-learning" className="leading-tight text-neutral-300 inline-block border-b border-gray-600 hover:text-neutral-500 hover:border-neutral-500 transition-colors">Read More</Link>
        </div>
      </div>
    </div>
  );
}
