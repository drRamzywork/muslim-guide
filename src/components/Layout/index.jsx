

import { useRouter } from "next/router";
import localFont from "next/font/local";
import Footer from '../Footer';
import Navbar from "../Navbar";

const Andalus = localFont({
  src: [
    {
      path: "../../../public/fonts/Andalus.ttf",
      style: "bold",
      weight: "500",
    },
  ],
});





export default function Layout({ children, dataAllSections, dataAllLangs, dataPreliminaries, dataAllSettings }) {
  const router = useRouter();
  return (
    <>
      <main className={`${Andalus.className}`}>
        {router.pathname !== '/' && router.pathname !== '/section/[slug]' &&
          <Navbar
            dataAllSections={dataAllSections}
            dataAllLangs={dataAllLangs}
            dataPreliminaries={dataPreliminaries}
            dataAllSettings={dataAllSettings}
          />
        }

        {children}

        <Footer dataAllSettings={dataAllSettings} />

      </main>
    </>
  )
}