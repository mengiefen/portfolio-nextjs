import Head from "next/head";
import Layout from "../components/Layout/layout";

const Home = () => {
  return (
    <main>
      <Head>
        <meta
          property="og:description"
          content="A portfolio website built with Next.js, and styled-components"
        />
        <meta
          property="og:image"
          content="https://live.staticflickr.com/65535/52267053748_c37dad3ffa_k.jpg"
        />
        <meta property="og:url" content="https://mengstufentaw.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />

        <title>Mengstu's Portfolio</title>

        <link rel="icon" href="./favicon.ico"></link>

        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="manifest" href="./site.webmanifest" />
        <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout />
    </main>
  );
};

export default Home;
