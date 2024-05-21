import { Fragment } from "react";
import Head from "next/head";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "tinymce/skins/ui/oxide/skin.min.css";
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
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
