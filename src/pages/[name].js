import Head from 'next/head';

import ColorHash from 'color-hash';
const colorHash = new ColorHash();


export default function Home({ name }) {
  const colors = [];

  for (let i = 0; i < 5; i++) colors.push(colorHash.hex(name + (i * 5)));

  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=5, shrink-to-fit=no" />

        <title>Happy Birthday, {name}!</title>
        <meta name="description" content={`Wishing ${name} a very happy birthday! From, Camdan.`} />

        <meta name="theme-color" content="<%= colors[0] %>" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`Happy Birthday, ${name}!`} />
        <meta name="twitter:description" content={`Wishing ${name} a very happy birthday! From, Camdan.`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Happy Birthday" />
        <meta property="og:title" content={`Happy Birthday, ${name}!`} />
        <meta property="og:description" content={`Wishing ${name} a very happy birthday! From, Camdan.`} />
      </Head>

      <main className="flex flex-col items-center justify-center w-screen h-screen overflow-x-hidden overflow-y-hidden" style={{ backgroundColor: colors[0] }}>
        <div className="flex flex-row items-center mx-4">
          <img alt="Icon" src={`https://source.boringavatars.com/beam/512/${name}?colors=${colors.join(',')}`} width="32" height="32" className="w-16 h-16 sm:w-32 sm:h-32" />
          <div className="flex flex-col ml-8" style={{ color: colors[1] }}>
            <h1 className="text-3xl font-black sm:text-5xl">
              Happy Birthday, {name}!
            </h1>
            <h2 className="mt-2 font-medium text-m sm:text-xl">
              Wishing you all the best, from Camdan.
            </h2>
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const route = params.name;
  const name = route[0].toUpperCase() + route.toLowerCase()
    .slice(1);

  return {
    props: { name },
  };
};
