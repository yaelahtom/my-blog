import Head from "next/head";

export default function HomeBlog() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Head>
        <title>Writing | Tomi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="pt-20">
        {/* intro */}
        <div className="flex justify-start px-6 flex-col gap-4">
          <h1 className=" text-neutral-300 font-bold text-4xl">Writing</h1>
          {/* post list */}
          <div className="flex flex-col gap-2 mt-2">
            <a href="" className="text-neutral-300 flex">
              <p className="">Working with Burnout</p>
              <code className="ml-auto text-green-400">Dec 03</code>
            </a>
            <a href="" className="text-neutral-300 flex">
              <p className="">Menggila</p>
              <code className="ml-auto text-green-400">Dec 03</code>
            </a>
            <a href="" className="text-neutral-300 flex">
              <p className="">Daniel Naroditsky: Being Daniel Naroditsky</p>
              <code className="ml-auto text-green-400">Dec 03</code>
            </a>
            <a href="" className="text-neutral-300 flex">
              <p className="">Learn React Navigation</p>
              <code className="ml-auto text-green-400">Dec 04</code>
            </a>
            <a href="" className="text-neutral-300 flex">
              <p className="">Celestial Existence</p>
              <code className="ml-auto text-green-400">Dec 04</code>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
