import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss';
import { IoMenu } from "react-icons/io5";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoIosArrowBack } from "react-icons/io";

const Navbar = ({ dataAllSections, dataPreliminaries }) => {
  const router = useRouter();
  const [sections, setSections] = useState(false);
  const [preliminaries, setPreliminaries] = useState(false);

  const variants = {
    open: { opacity: 1, y: 180 },
    closed: { opacity: 0, y: "-150%" },
  };
  const sectionsMenuRef = useRef(null);
  const preliminariesMenuRef = useRef(null);

  console.log(dataPreliminaries, "dataPreliminaries")

  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click is outside of the navMenuRef and the menu is open
      if (sectionsMenuRef.current && !sectionsMenuRef.current.contains(event.target)) {

        setSections(false); // Close the nav menu
      }
    }

    // Add the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sections]);

  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click is outside of the navMenuRef and the menu is open
      if (preliminariesMenuRef.current && !preliminariesMenuRef.current.contains(event.target)) {

        setPreliminaries(false); // Close the nav menu
      }
    }

    // Add the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [preliminaries]);


  return (
    <>
      <nav className={styles.greenBG} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>

        <div className="container pt-4" >
          <div className={styles.frameParent} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
            <div className={styles.frameGroup}>

              <div className={styles.parent}>
                <div className={styles.div1} style={{ color: router.pathname !== '/' && 'var(--white)' }}>العربية</div>
                <img
                  className={styles.flagOfSaudiArabia1938197Icon}
                  alt=""
                  src="/flag-of-saudi-arabia-19381973-1@2x.png"
                />
                <img
                  className={styles.fiRsAngleSmallUpIcon}
                  alt=""
                  src={router.pathname === '/' ? "/firsanglesmallup.svg" : "/firsanglesmallup1.svg"}
                />
              </div>
              <img
                className={styles.arrowDownwardIcon}
                alt=""
                src={router.pathname === '/' ? '/arrow-downward.svg' : '/arrow-downward1.svg'}
              />
              <div className={styles.fiRsSearchWrapper}>
                <img
                  className={styles.fiRsSearchIcon}
                  alt=""
                  src={router.pathname === '/' ? "/firssearch.svg" : "/firssearch1.svg"}
                />
              </div>



            </div>

            <div className={styles.burger_icon}>
              <IoMenu />
            </div>

            <div className={styles.frameContainer}>
              <div className={styles.wrapper}>
                <b className={styles.b}>من نحن</b>
              </div>
              <div
                ref={sectionsMenuRef}

                onClick={() => setSections((prev) => !prev)}
                className={styles.wrapper}>
                {/* router.pathname === '/sections' || router.pathname.includes('section') ? styles.container : */}
                <div className={styles.fiRsAngleSmallUpParent}>
                  <img
                    className={`${styles.fiRsAngleSmallUpIcon} ${sections && styles.active}`}
                    alt=""
                    src="/firsanglesmallup1.svg"
                  />
                  <b className={styles.b}>الأقسام</b>
                </div>



                <motion.div
                  initial="closed"
                  animate={sections ? "open" : "closed"}
                  variants={variants}
                  transition={{ duration: 0.5, type: "tween" }}
                  className={styles.sections_menu_container}

                >
                  <ul>
                    {dataAllSections?.map((sec, idx) =>
                      <li key={idx}>
                        <Link href={`/section-details/${sec.slug}`}>
                          <p>{sec.name}</p>
                          <IoIosArrowBack />
                        </Link>
                      </li>
                    )}
                  </ul>

                </motion.div>


              </div>

              <div
                ref={preliminariesMenuRef}
                onClick={() => setPreliminaries((prev) => !prev)}

                className={router.pathname.includes('preliminaries') ? styles.container : styles.wrapper}>
                <div className={styles.fiRsAngleSmallUpParent}>
                  <img
                    className={`${styles.fiRsAngleSmallUpIcon} ${preliminaries && styles.active}`}
                    alt=""
                    src="/firsanglesmallup1.svg"
                  />
                  <b className={styles.b}>المقدمات</b>
                </div>



                <motion.div
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
              </div>



              <Link href={'/'} className={router.pathname === '/' ? styles.container : styles.wrapper}>
                <b className={styles.b}>الرئيسية</b>
              </Link>
            </div>

            <Link href={'/'} className={styles.frame}>
              <div className={styles.b}>{` دليل المسلم الميسر `}</div>
            </Link>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar