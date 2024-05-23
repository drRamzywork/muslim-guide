import { Fragment } from "react";
import Head from "next/head";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "tinymce/skins/ui/oxide/skin.min.css";
import Layout from "../src/components/Layout";
import siteData from "../src/components/siteData";

function MyApp({
  Component,
  pageProps,
  dataAllSections,
  dataAllLangs,
  dataPreliminaries,
}) {
  return (
    <Layout
      dataAllSections={dataAllSections}
      dataAllLangs={dataAllLangs}
      dataPreliminaries={dataPreliminaries[0].posts}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default siteData(MyApp);
