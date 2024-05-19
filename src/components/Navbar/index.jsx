import React from 'react'
import styles from './index.module.scss';
import { IoMenu } from "react-icons/io5";
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname, "router.locale")

  return (
    <>
      <div className="container pt-4" >
        {/* Navbar  */}
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
            <div className={router.pathname === '/sections' || router.pathname.includes('section') ? styles.container : styles.wrapper}>
              <div className={styles.fiRsAngleSmallUpParent}>
                <img
                  className={styles.fiRsAngleSmallUpIcon}
                  alt=""
                  src="/firsanglesmallup1.svg"
                />
                <b className={styles.b}>الأقسام</b>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.fiRsAngleSmallUpParent}>
                <img
                  className={styles.fiRsAngleSmallUpIcon}
                  alt=""
                  src="/firsanglesmallup1.svg"
                />
                <b className={styles.b}>المقدمات</b>
              </div>
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

    </>
  )
}

export default Navbar