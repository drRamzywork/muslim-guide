import { Fragment } from "react";
import Head from "next/head";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "tinymce/skins/ui/oxide/skin.min.css";
import localFont from "next/font/local";

const Andalus = localFont({
  src: [
    {
      path: "../public/fonts/Andalus.ttf",
      style: "bold",
      weight: "500",
    },
  ],
});

const Tajwal = localFont({
  src: [
    {
      path: "../public/fonts/Tajwal/Tajawal-Black.ttf",
      style: "bold",
      weight: "500",
    },
  ],
});

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>muslim-guide</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <main className={`${Andalus.className}`}>
        <Component {...pageProps} />
      </main>
    </Fragment>
  );
}

export default MyApp;
