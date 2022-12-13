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
            {`I'm`} a backend developer in Indonesia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, eaque.
          </p>
          <br />
          <h2 className="text-neutral-300 font-bold text-xl border-b-neutral-300 border-b">
            Skills
          </h2>
          <p className=" text-neutral-300 text-sm ">
            Languages: <code className="text-green-400">Javascript, Node.js, PHP, HTML, CSS.</code>
          </p>
          <p className=" text-neutral-300 text-sm">
            Frameworks: <code className="text-green-400">Next.js, React.js, Tailwind, Bootstrap, Express.js, Hapi.js, Vite.</code>
          </p>
          <p className=" text-neutral-300 text-sm">
            Databases: <code className="text-green-400">MongoDB, MySQL, Firebase.</code>
          </p>
          <p className=" text-neutral-300 text-sm ">
            Miscellaneous: <code className="text-green-400">Linux, GIT Version Control, Design Pattern, PM2+.</code>
          </p>
          <h2 className="text-neutral-300 font-bold text-xl border-b-neutral-300 border-b">
            About this site
          </h2>
          <p className=" text-neutral-300 text-sm">
            This is not a diary or maybe this is a diary. A diary is a personal, private thing that I don&apos;t feel comfortable sharing with you. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam totam commodi debitis cupiditate nihil eos iste qui vitae fugiat minus?
          </p>
          <br />
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
