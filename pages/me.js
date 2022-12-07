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
          <p className=" text-neutral-300  text-sm">
            {`Hey, I'm Tomi!`} Welcome to my{" "}
            <span className="text-green-400">digital garden</span>. 🌱
          </p>
          <p className=" text-neutral-300 text-sm">
            {`I'm`} a backend developer in Indonesia. Currently working as a
            validation blockchain engineer in <code>0xPetaniNode</code> team.
          </p>
          <p className=" text-neutral-300 text-sm">
            This is not a diary. A diary is a personal, private thing that I don’t feel comfortable sharing with you, or maybe is it personal, but yet, still not a diary
          </p>

          <figure>
            <embed src="https://wakatime.com/share/@santomi/ec9056b8-c394-4b81-93c8-76f8012c30d0.svg"></embed>
          </figure>
        </div>
      </main>
    </div>
  );
}
