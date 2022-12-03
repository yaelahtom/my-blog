import Head from "next/head";

export default function Me() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Head>
        <title>About Me | Tomi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="pt-20">
        {/* intro */}
        <div className="flex justify-start px-6 flex-col gap-4">
          <h1 className=" text-neutral-300 font-bold text-4xl">About me</h1>
          <p className=" text-neutral-300 font-bold text-sm">
            {`Hey, I'm Tomi!`} Welcome to my{" "}
            <span className="text-green-400">digital garden.</span> 🌱
          </p>
          <p className=" text-neutral-300 text-sm">
            {`I'm`} a backend developer in Malang, Indonesia. Currently working as a
            tester on Blockchain Node.
          </p>
          <p className=" text-neutral-300 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nam, nobis consectetur dolor laborum delectus corrupti exercitationem possimus numquam voluptates accusantium ratione ea omnis illum at? Quidem nesciunt quae corporis?
          </p>
        </div>
      </main>
    </div>
  );
}
