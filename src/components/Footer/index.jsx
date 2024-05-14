import React from 'react'
import styles from '../../../pages/index.module.scss';
import compStyles from './index.module.scss'
import Link from 'next/link';
const Footer = () => {
  return (
    <footer id='footer' className={compStyles.footer}>
      <div className="container">


        <div className={styles.frameParent10}>
          <div className={styles.wrapper6}>
            <div className={styles.b}>{` دليل المسلم الميسر `}</div>
          </div>

          <div className={styles.frameParent11}>
            <div className={styles.frameParent12}>
              <div className={styles.fiRsAngleSmallUpContainer}>
                <img
                  className={styles.fiRsAngleSmallUpIcon3}
                  alt=""
                  src="/firsanglesmallup2.svg"
                />
                <div className={styles.div13}>اللغات</div>
              </div>
              <div className={styles.lineDiv} />
              <div className={styles.div13}>من نحن</div>
              <div className={styles.lineDiv} />
              <div className={styles.div13}>المقدمات</div>
              <div className={styles.lineDiv} />
              <div className={styles.div13}>الاقسام</div>
              <div className={styles.lineDiv} />
              <div className={styles.div13}>الرئيسية</div>
            </div>
            <Link href='#'>
              <img
                className={styles.frameChild15}
                alt=""
                src="/frame-1984077254.svg"
              />
            </Link>
          </div>
        </div>
        <hr />
        <div
          className={styles.div12}
        >{`© الحقوق محفوظة لدليل المسلم الميسر 2024@  `}</div>
      </div>
    </footer>
  )
}

export default Footer