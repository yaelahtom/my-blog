import Head from "next/head";
import Image from "next/image";

export default function Me() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Head>
        <title>About Me | Tomi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="max-w-screen-sm px-6 mx-auto">
        {/* name */}
        <div className="flex justify-center">
          <h1 className=" text-green-400 font-bold text-4xl">Tomi</h1>
        </div>
      </header>
    </div>
  );
}
