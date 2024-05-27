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
  dataAllSettings,
  locale,
}) {
  console.log("Locale in MyApp:", locale);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
