import Head from "next/head";

export default function Me() {
  return (
    <div className="bg-zinc-900 min-h-screen max-w-screen-sm mx-auto">
      <Head>
        <title>About Me | Tomi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="pt-20 lg:pt-8">
        {/* intro */}
        <div className="flex justify-start px-6 flex-col gap-2">
          <h1 className=" text-neutral-300 font-bold text-4xl">About me</h1>
          <p className=" text-neutral-300  text-sm">
            {`Hey, I'm Tomi!`} Welcome to my{" "}
            <span className="text-green-400">digital garden</span>. 🌱
          </p>
          <p className=" text-neutral-300 text-sm">
            {`I'm`} a backend developer in Indonesia. Currently working as a
            validation blockchain engineer in <code>0xPetaniNode</code> team.
          </p>
          <p className="text-neutral-300 text-sm">
            My only motivation for making this site is since i love to take a note or documented all my life problem into a structured one, why i just dont document in my portfolio instead?
            This will contain my thoughts and whatever i insist to write about things that i learned thru the world.
          </p>
          <br/>
          <h2 className="text-neutral-300 font-bold text-xl border-b-neutral-300 border-b">
            About this site
          </h2>
          <p className=" text-neutral-300 text-sm">
            This is not a diary or maybe this is a diary. A diary is a personal, private thing that I don’t feel comfortable sharing with you, I would state this site as a portfolio but in a way will contain diary as a self-reflection. In compendium this is a <span className="text-green-400">digital garden</span> 🌱.
          </p>
          <br/>
          <h2 className="text-neutral-300 font-bold text-xl border-b-neutral-300 border-b">
            My coding stats
          </h2>
          <figure>
            <embed src="https://wakatime.com/share/@santomi/ec9056b8-c394-4b81-93c8-76f8012c30d0.svg"></embed>
          </figure>
        </div>
      </main>
    </div>
  );
}
