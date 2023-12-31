import Head from 'next/head';
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import BackgroundImage from "./components/BackgroundImage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Analytics />
      <Head>
        <title>Mario Moina - Steel Detailer</title>
        <meta name="description" content='Mario Molina - Steel Detailer, provides steel detailing services for industry and steel fabricators. Among our services are Industrial steel detailing, Structural steel detailing, Miscellaneous steel detailing, Shop drawing production, BIM modeling and Fabrication support.'/>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content='Mario Molina - Steel Detailer'/>
        <meta property="og:description" content='Providing top-quality steel detailing services for various industries.'/>
        <meta property="og:image" content='https://www.steeldetailer.com.ar/_next/image?url=%2Flogo.png&w=128&q=75'/>
        <meta property="og:url" content='https://www.steeldetailer.com.ar'/>
        <meta property="og:locale" content="es-Argentina" />
        {/* Links for manifest, favicon, and icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <BackgroundImage />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          For contact:&nbsp;
          <code className="font-mono font-bold">
            mariomolina@steeldetailer.com.ar
          </code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/brand.svg"
              alt="Mario Logo"
              className=""
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="mt-80 relative flex flex-col place-items-center before:absolute before:h-[0px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          src="/logo.png"
          alt="Logo"
          className="animate-pulse duration-1000 text-xl relative dark:drop-shadow-[0_0_1.7rem_#ffffff70]"
          width={100}
          height={24}
          priority
        />
        <h1 className="font-bold text-5xl relative dark:drop-shadow-[0_0_1.7rem_#ffffff90]">
          STEEL DETAILING
        </h1>
        <h2 className="text-xl relative dark:drop-shadow-[0_0_1.7rem_#ffffff70]">
          under construction
        </h2>
      </div>
    </main>
  );
}
