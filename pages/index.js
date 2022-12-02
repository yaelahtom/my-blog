import Head from "next/head";
import Image from "next/image";
import ppic from "../public/megif.gif";

export default function Home() {
  return (
    // bg
    <div className="bg-zinc-900 h-screen block">
      <Head>
        <title>Tomi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="max-w-screen-sm px-6 mx-auto">
        {/* image ppic */}
        <div className="flex items-center justify-center">
          <Image
            src={ppic}
            alt="profile pic"
            className="rounded border-4 border-neutral-300 bg-cover bg-center bg-no-repeat w-28 h-28 mt-24"
          />
        </div>
        {/* name */}
        <div className="flex justify-center mt-4">
          <h1 className=" text-neutral-300 font-bold text-4xl">Tomi</h1>
        </div>
      </header>
      <br />
      <br />
      {/* line */}
      <div className="max-w-screen-sm px-6 mx-auto">
        <div className="border-t border-neutral-300"></div>
      </div>
    </div>
  );
}
