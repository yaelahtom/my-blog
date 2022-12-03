import Head from "next/head";

export default function Me() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Head>
        <title>Projects | Tomi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="pt-20">
        {/* intro */}
        <div className="flex justify-start px-6 flex-col gap-4">
          <h1 className=" text-neutral-300 font-bold text-4xl">My projects</h1>
        </div>
      </main>
    </div>
  );
}
