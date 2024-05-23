

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

const Tajwal = localFont({
  src: [
    {
      path: "../../../public/fonts/Tajwal/Tajawal-Black.ttf",
      style: "bold",
      weight: "500",
    },
  ],
});



export default function Layout({ children, dataAllSections, dataAllLangs, dataPreliminaries }) {
  const router = useRouter();


  return (
    <>

      <main className={`${Andalus.className}`}>

        {router.pathname !== '/' &&
          <Navbar
            dataAllSections={dataAllSections}
            dataAllLangs={dataAllLangs}
            dataPreliminaries={dataPreliminaries}
          />
        }

        {children}
      </main>
      <Footer />
    </>
  )
}