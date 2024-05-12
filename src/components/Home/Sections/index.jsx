import React from 'react'
import styles from '../../../../pages/index.module.scss';
import comStyles from './index.module.scss';
import Link from 'next/link';

const Sections = ({ dataAllSections }) => {
  return (
    <section id='sections' className={comStyles.sections} dir='ltr'>

      <div className="container">

        <div className={styles.frameParent22}>
          <div className={styles.parent14}>
            <b className={styles.b25}>الأقسام</b>
            <img
              className={styles.frameChild21}
              alt=""
              src="/group-1000006280@2x.png"
            />
          </div>
          <div className={styles.div26}>
            يحتوي الكتاب على مجموعة مختلفة من الاقسام المختلفة لشرح الدين الاسلامي
            بطريقة سهلة ومبسطة وسريعة تصل بسهولة لجميع الاشخاص
          </div>
        </div>


        <div className={styles.frameParent13}>
          <div className={styles.frameParent14}>
            <div className={styles.parent6}>
              <b className={styles.b}>باقي الأقسام</b>
              <div className={styles.div18}>{dataAllSections.length} قسم</div>
            </div>
            <div className={styles.frameParent15}>
              <div className={styles.frameParent16}>
                {dataAllSections.map((sec, index) =>
                  <div className={styles.frameParent18} key={index} >
                    <div className={styles.parent9}>
                      <b className={styles.b8}>{sec.name}</b>
                      <div className={styles.div22} dir='rtl'>
                        {sec.description}
                      </div>
                    </div>
                    <img
                      className={styles.frameChild16}
                      alt=""
                      src={sec.icon}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent6}>
            <img
              className={styles.frameChild20}
              alt=""
              src="/rectangle-22525@2x.png"
            />
            <div className={styles.frameParent21} >
              <div className={styles.group}>
                <b className={styles.b}>ايمان المسلم</b>
                <div className={styles.div23}>
                  اتفقت جميع رسالات الأنبياء لأقوامهم على عبادة الله وحده لا شريك
                  له والكفر بما يعبد من دون الله وهذا هو حقيقة معنى لا إله إلا
                  الله محمد رسول الله، وهي الكلمة التي يدخل بها المرء في دين الله.
                </div>
              </div>
              <b className={styles.b24}>اقرأ المزيد</b>
            </div>
          </div>
        </div>

        <Link href='/' className={styles.link}>استكشف المزيد</Link>
      </div>

    </section>

  )
}

export default Sections