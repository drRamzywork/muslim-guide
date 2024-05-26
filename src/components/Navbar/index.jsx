import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss';
import { IoMenu } from "react-icons/io5";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoIosArrowBack } from "react-icons/io";

const Navbar = ({ dataAllSections, dataPreliminaries, dataAllLangs, dataAllSettings }) => {
  const router = useRouter();
  const [sections, setSections] = useState(false);
  const [langs, setLangs] = useState(false);

  const variants = {
    open: { opacity: 1, y: 180 },
    closed: { opacity: 0, y: "-150%" },
  };
  const langsMenuRef = useRef(null);




  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click is outside of the navMenuRef and the menu is open
      if (langsMenuRef.current && !langsMenuRef.current.contains(event.target)) {

        setLangs(false); // Close the nav menu
      }
    }

    // Add the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langs]);



  const currentLangData = dataAllLangs ? Object?.entries(dataAllLangs)?.find(([code, language]) => code === router.locale) : []

  return (
    <>
      <nav className={`${styles.greenBG}  `} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>

        <div className="container pt-2 pt-md-4" >
          <div className={styles.frameParent} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
            <div className={styles.frameGroup}>

              <div className="desktop">
                <div className={styles.parent}>
                  <a href='https://iiacademy.net/media/files/PDFBooks/دليل المسلم الميسر (The Simplified Muslim Guide_AR).pdf' target='_blank'>

                    <img
                      className={styles.arrowDownwardIcon}
                      alt=""
                      src={router.pathname === '/' ? '/arrow-downward.svg' : '/arrow-downward1.svg'}
                    />
                  </a>

                  <div className={styles.currentLang}
                    onClick={() => setLangs((prev) => !prev)}
                  >

                    <div className={styles.div1} style={{ color: router.pathname !== '/' && 'var(--white)' }}>{currentLangData[1]?.native}</div>
                    <img
                      className={styles.flagOfSaudiArabia1938197Icon}
                      alt=""
                      src={currentLangData[1]?.icon_url}
                    />
                    <img
                      className={`${styles.fiRsAngleSmallUpIcon} ${langs && styles.active}`}
                      alt=""
                      src={router.pathname === '/' ? "/firsanglesmallup.svg" : "/firsanglesmallup1.svg"}
                    />

                    <motion.div
                      initial="closed"
                      animate={langs ? "open" : "closed"}
                      variants={variants}
                      transition={{ duration: 0.5, type: "tween" }}
                      className={styles.langs_menu_container}
                    >
                      <ul>
                        {Object.entries(dataAllLangs).map(([code, language]) => (
                          <li key={code}>

                            <a
                              href={`/${code}${router.asPath}`}>
                              <img src={language.icon_url} alt="" />
                              <p>{language.native}</p>

                            </a>
                          </li>
                        ))}
                      </ul>

                    </motion.div>


                  </div>
                </div>

              </div>


              <div className="mobile">
                <div className={styles.parent}>

                  <div className={styles.currentLang}
                    ref={langsMenuRef}
                    onClick={() => setLangs((prev) => !prev)}
                  >

                    <div className={styles.div1} style={{ color: 'var(--white)' }}>العربية</div>
                    <img
                      className={styles.flagOfSaudiArabia1938197Icon}
                      alt=""
                      src="/flag-of-saudi-arabia-19381973-1@2x.png"
                    />
                    <img
                      className={`${styles.fiRsAngleSmallUpIcon} ${langs && styles.active}`}
                      alt=""
                      src={"/firsanglesmallup1.svg"}
                    />

                    <motion.div
                      initial="closed"
                      animate={langs ? "open" : "closed"}
                      variants={variants}
                      transition={{ duration: 0.5, type: "tween" }}
                      className={styles.langs_menu_container}
                    >
                      <ul>
                        {Object.entries(dataAllLangs).map(([code, language]) => (
                          <li key={code}>
                            <a
                              href={`/${code}${router.asPath}`}>
                              <img src={language.icon_url} alt="" />
                              <p>{language.name}</p>

                            </a>
                          </li>
                        ))}
                      </ul>

                    </motion.div>

                  </div>
                  <img
                    className={styles.arrowDownwardIcon}
                    alt=""
                    src={'/arrow-downward1.svg'}
                  />
                </div>
              </div>


            </div>



            <div className={styles.frameContainer}>
              {/* <div className={styles.wrapper}>
                <b className={styles.b}>من نحن</b>
              </div> */}
              <div className={router.pathname.includes('section') ? styles.container : styles.wrapper}>
                {/* router.pathname === '/sections' || router.pathname.includes('section') ? styles.container : */}
                <Link href={'/sections'}
                  Link className={styles.fiRsAngleSmallUpParent}>
                  <b className={styles.b}>{dataAllSettings?.sections}</b>
                </Link>


              </div>

              <div className={router.pathname.includes('preliminaries') ? styles.container : styles.wrapper}>

                <Link href={'/preliminaries'} className={styles.fiRsAngleSmallUpParent}>

                  <b className={styles.b}>{dataAllSettings?.preliminaries}</b>
                </Link>



                {/* <motion.div
                  initial="closed"
                  animate={preliminaries ? "open" : "closed"}
                  variants={variants}
                  transition={{ duration: 0.5, type: "tween" }}
                  className={styles.sections_menu_container}

                >
                  <ul>
                    {dataPreliminaries?.map((sec, idx) =>
                      <li key={idx}>
                        <Link href={`/details/${sec.slug}`}>
                          <p>{sec.title}</p>
                          <IoIosArrowBack />
                        </Link>
                      </li>
                    )}
                  </ul>

                </motion.div>
                 */}
              </div>



              <Link href={'/'} className={router.pathname === '/' ? styles.container : styles.wrapper}>
                <b className={styles.b}>{dataAllSettings?.home}</b>
              </Link>
            </div>


            <div className={styles.frame_container}>
              <div className={styles.burger_icon}>
                <IoMenu />
              </div>

              <Link href={'/'} className={styles.frame}>
                <div className={styles.title}>{` دليل المسلم الميسر `}</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar