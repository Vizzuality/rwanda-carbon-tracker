import { FC } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Footer from 'containers/footer';

const Home: FC = () => (
  <div className="m-auto h-screen bg-[url('/images/landing.png')] bg-center bg-no-repeat">
    <Head>
      <meta name="viewport" content="width=1024, initial-scale=1" />
      <title>Rwanda carbon tracker</title>
    </Head>
    <div className="m-auto flex h-full w-full flex-col items-center justify-center space-y-4 text-center leading-8">
      <h1 className="font-serif text-9xl tracking-tighter text-white">
        Invest in Rwanda
        <span className="block text-yellow-0"> carbon credits</span>
      </h1>
      <p className="font-inter text-xl leading-8 text-white">
        Accelerate socio-economic success and environmental stewardship
      </p>
      <div className="flex items-center space-x-4 p-8 font-bold text-cobalt-0">
        <Link
          href="positive-impacts"
          className="cursor flex items-center justify-center rounded-3xl border border-yellow-0 bg-yellow-0 px-6 py-2 leading-6 text-cobalt-0 hover:bg-transparent hover:text-yellow-0 active:border-yellow-0 active:bg-transparent"
        >
          Positive impacts
        </Link>
        <Link
          href="/why-rwanda"
          className="cursor flex items-center justify-center rounded-3xl border border-green-0 bg-green-0 px-6 py-2 leading-6 text-cobalt-0 hover:bg-transparent hover:text-green-0 active:border-green-0 active:bg-transparent"
        >
          Why Rwanda
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
