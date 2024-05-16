import React from 'react'
import styles from './index.module.scss';
import { IoMenu } from "react-icons/io5";
import { useRouter } from 'next/router';

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
              <div className={styles.div1}>العربية</div>
              <img
                className={styles.flagOfSaudiArabia1938197Icon}
                alt=""
                src="/flag-of-saudi-arabia-19381973-1@2x.png"
              />
              <img
                className={styles.fiRsAngleSmallUpIcon}
                alt=""
                src="/firsanglesmallup.svg"
              />
            </div>
            <img
              className={styles.arrowDownwardIcon}
              alt=""
              src="/arrow-downward.svg"
            />
            <div className={styles.fiRsSearchWrapper}>
              <img
                className={styles.fiRsSearchIcon}
                alt=""
                src="/firssearch.svg"
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
            <div className={router.pathname === '/sections' ? styles.container : styles.wrapper}>
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
            <div className={router.pathname === '' ? styles.container : styles.wrapper}>
              <b className={styles.b}>الرئيسية</b>
            </div>
          </div>

          <div className={styles.frame}>
            <div className={styles.b}>{` دليل المسلم الميسر `}</div>
          </div>
        </div>
      </div></>
  )
}

export default Navbar