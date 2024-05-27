import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss';
import { IoMenu } from "react-icons/io5";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = ({ dataAllLangs, dataAllSettings }) => {
  const router = useRouter();
  const [langs, setLangs] = useState(false);
  const [menu, setMenu] = useState(false);
  console.log(dataAllSettings, "dataAllSettingsNav")

  const variants = {
    open: { opacity: 1, y: 180 },
    closed: { opacity: 0, y: "-150%" },
  };

  const variants2 = {
    open: { opacity: 1, y: 50 },
    closed: { opacity: 0, y: "-150%" },
  };
  const menuRef = useRef(null);
  const langsMenuRef = useRef(null);

  const lineVariants = {
    burger: {
      rotate: 0,
      translateY: 0,
      opacity: 1,
    },
    cross: {
      rotate: 45,
      translateY: [0, 6, 6],
      opacity: {
        0: 1,
        1: 0,
        2: 1,
      },
    },
  };

  const middleLineVariants = {
    burger: {
      opacity: 1,
    },
    cross: {
      opacity: 0,
    },
  };

  const bottomLineVariants = {
    burger: {
      rotate: 0,
      translateY: 0,
    },
    cross: {
      rotate: -45,
      translateY: -6,
    },
  };



  useEffect(() => {
    function handleClickOutside(event) {
      if (langsMenuRef.current && !langsMenuRef.current.contains(event.target)) {
        setLangs(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  const currentLangData = dataAllLangs ? Object?.entries(dataAllLangs)?.find(([code, language]) => code === router.locale) : []

  return (
    <>
      <nav className={`${styles.greenBG}  ${router.pathname !== '/' && styles.darkGreenBG}`} dir={dataAllSettings.dir}>

        <div className="container pt-2 pt-md-4" >
          <div className={styles.frameParent} dir={dataAllSettings.dir}>
            <div className={styles.frameGroup}>

              <div className="desktop">
                <div className={styles.parent} ref={langsMenuRef}>
                  <a href='https://iiacademy.net/media/files/PDFBooks/دليل المسلم الميسر (The Simplified Muslim Guide_AR).pdf' target='_blank'>

                    <img
                      className={styles.arrowDownwardIcon}
                      alt=""
                      src={router.pathname === '/' ? '/arrow-downward.svg' : '/arrow-downward1.svg'}
                    />
                  </a>

                  <div


                    className={styles.currentLang}
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

                <div
                  className={styles.parent}
                >

                  <div className={styles.currentLang}
                    onClick={() => setLangs((prev) => !prev)}
                  >

                    <div className={styles.div1} style={{ color: 'var(--white)' }}>{currentLangData[1]?.native}</div>
                    <img
                      className={styles.flagOfSaudiArabia1938197Icon}
                      alt=""
                      src={currentLangData[1]?.icon_url}
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


            <div className={styles.frame_container} ref={menuRef}>
              <div className={styles.burger_icon} onClick={() => setMenu(prev => !prev)}>
                <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Top line */}
                  <motion.path
                    d="M1.39014 1H17.3901"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={lineVariants}
                    animate={menu ? "cross" : "burger"}
                  />
                  {/* Middle line */}
                  <motion.path
                    d="M1.39014 7H17.3901"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={middleLineVariants}
                    animate={menu ? "cross" : "burger"}
                  />
                  {/* Bottom line */}
                  <motion.path
                    d="M1.39014 13H17.3901"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={bottomLineVariants}
                    animate={menu ? "cross" : "burger"}
                  />
                </svg>
              </div>


              <motion.div
                initial="closed"
                animate={menu ? "open" : "closed"}
                variants={variants2}
                transition={{ duration: 0.5, type: "tween" }}
                className={styles.menu_container}
              >
                <ul>
                  <li >
                    <a
                      href={`/sections`}>
                      <p>{dataAllSettings.sections}</p>
                    </a>
                  </li>
                  <li >
                    <a
                      href={`/preliminaries`}>
                      <p>{dataAllSettings.preliminaries}</p>
                    </a>
                  </li>
                </ul>

              </motion.div>

              <Link href={'/'} className={styles.frame}>
                <div className={styles.title}>{` دليل المسلم الميسر `}</div>
              </Link>
            </div>
          </div>
        </div>
      </nav >

    </>
  )
}

export default Navbar