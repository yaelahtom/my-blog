import Head from "next/head";
import Image from "next/image";
import ppic from "../public/pasfoto.jpeg";
import Link from "next/link";
import { FaGithubAlt, FaSpotify } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Home() {
  return (
    // bg
    <div className="bg-zinc-900 min-h-screen">
      <Head>
        <title>Tomi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="max-w-screen-sm px-6 mx-auto">
        {/* image ppic */}
        <div className="flex items-center justify-center">
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
          <p className="text-neutral-300 text-sm">31 Dec 2002</p>
          <p className="mt-3 text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iusto ullam blanditiis quidem quod excepturi doloremque libero quasi nobis, officia vel?</p>
        </div>

        <div className="pt-12">
          <Link className="text-neutral-300 font-bold text-xl hover:text-violet-400" href=''>
            Working with Burnout
          </Link>
          <p className="text-neutral-300 text-sm">31 Dec 2002</p>
          <p className="mt-3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iusto ullam blanditiis quidem quod excepturi doloremque libero quasi nobis, officia vel?</p>
          <p className="mt-3"></p>
          <a href="" className="leading-tight text-gray-900 dark:text-gray-100 inline-block border-b-1 border-gray-600 hover:text-gray-500 hover:border-gray-500 transition-colors underline">Read More</a>
        </div>

        <div className="pt-12">
          <Link className="text-neutral-300 font-bold text-xl hover:text-violet-400" href=''>
            Working with Burnout
          </Link>
          <p className="text-neutral-300 text-sm">31 Dec 2002</p>
          <p className="mt-3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iusto ullam blanditiis quidem quod excepturi doloremque libero quasi nobis, officia vel?</p>
          <p className="mt-3"></p>
          <a href="" className="leading-tight text-gray-900 dark:text-gray-100 inline-block border-b-1 border-gray-600 hover:text-gray-500 hover:border-gray-500 transition-colors underline">Read More</a>
        </div>
      </div>
    </div>
  );
}
