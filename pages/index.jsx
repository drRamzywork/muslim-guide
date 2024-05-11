import { useState } from "react";
import HeroSection from "../src/components/Home/HeroSection";
import Navbar from "../src/components/Navbar";
import styles from "./index.module.scss";
import ExploreSec from "../src/components/Home/ExploreSec";
import Sections from "../src/components/Home/Sections";
const Frame = ({ dataPreliminaries, dataAllSections }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const imageUrls = [
    '/rectangle-157@2x.png',
    '/rectangle-158@2x.png',
    '/rectangle-156@2x.png',
    '/rectangle-157@2x.png',
    '/rectangle-158@2x.png',
    '/rectangle-156@2x.png',
    '/rectangle-157@2x.png',
    '/rectangle-158@2x.png',
    '/rectangle-156@2x.png',
    '/rectangle-157@2x.png',
    '/rectangle-158@2x.png',
    '/rectangle-156@2x.png',
  ]


  console.log(dataAllSections, 'dataAllSections')

  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <div className={styles.item} />
      <div className={styles.inner} />
      <div className={styles.child1} />

      <Navbar />


      <div className="container position-relative">
        <div className={styles.rectangleDiv} />

        <div className={styles.hero_container}>

          <img
            className={styles.rectangleIcon}
            alt=""
            // src="/rectangle-22519@2x.png"
            src={dataPreliminaries.posts[activeSlide].image}
          />

          <div className={styles.frameParent1}>
            <img className={styles.child2} alt="" src="/frame-61.svg" />

            <div className={styles.wrapper1}>
              <b className={styles.b4}>صلاة المسلم</b>
            </div>
            <div className={styles.div3}>
              الصلاة هي عمود الدين وصلة العبد بربه ومولاه , ولذلك كانت أعظم العبادات
              وأجلها شأنا , وقد أمر الله المسلم بالمحافظة عليها في كل أحواله في
              الحضر و السفر و الصحة
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b className={styles.b5}>{`استكشف المزيد `}</b>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <img className={styles.arrowSmIcon} alt="" src="/arrowsm@2x.png" />
              </div>
            </div>
          </div>

          {/* 
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <b className={styles.b6}>مشاهدة الآن</b>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild1} />
              <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
            </div>
          </div> */}

        </div>
      </div>

      <HeroSection
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        imageUrls={imageUrls}
        dataPreliminaries={dataPreliminaries}
      />

      <ExploreSec />


      <b className={styles.b13}>دليل المسلم الميسر</b>
      <div className={styles.wrapper3}>
        <b className={styles.b14}>
          <span>{`هيا بنا نستكشف `}</span>
          <span className={styles.span}>المقدمات</span>
        </b>
      </div>
      <div className={styles.div9}>
        أعظمُ مقاماتِ الإنسانِ عبوديتهُ لله وطاعتهُ لأوامره، فيها صلاح الدنيا
        والآخرة، فالدين يُسرٌ كله، وخيرٌ كله، وصلاحٌ كله. وهذه العبودية التي
        تشمل جميع جوانب الحياة، يجب أن تكون على علمٍ وبصيرة، ليكتمل بها الأجر
        وينجو بها من الزلل والزيغ
      </div>
      <div className={styles.child3} />
      <div className={styles.arrowParent}>
        <img className={styles.arrowIcon1} alt="" src="/arrow@2x.png" />
        <div className={styles.instanceParent}>
          <img
            className={styles.frameChild8}
            alt=""
            src="/frame-1984077309@2x.png"
          />
          <div className={styles.rectangleParent4}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22542@2x.png"
            />
            <div className={styles.wrapper4}>
              <b className={styles.b}>الضرورات الخمس</b>
            </div>
          </div>
          <img
            className={styles.frameChild8}
            alt=""
            src="/frame-1984077308@2x.png"
          />
        </div>
        <img className={styles.arrowIcon2} alt="" src="/arrow@2x.png" />
      </div>
      <div className={styles.frame1}>
        <img className={styles.groupIcon} alt="" src="/group-2.svg" />
        <img className={styles.frameChild10} alt="" src="/group-3.svg" />
        <div className={styles.frameParent9}>
          <div className={styles.parent5}>
            <b className={styles.b16}>
              <span>{`نحن فخورون بتقديم نسخة إلكترونيةمن كتاب `}</span>
              <span className={styles.span}>دليل المسلم الميسر</span>
              <span>{` `}</span>
            </b>
            <div className={styles.div10}>
              تم إنتاج هذا الكتاب بأكثر من ١٥ لغة لضمان وصول الرسالة الإسلامية
              إلى أكبر عدد ممكن من الأشخاص في مختلف أنحاء العالم
            </div>
          </div>
          <div className={styles.wrapper5}>
            <b className={styles.b8}>حمل الكتاب الآن</b>
          </div>
        </div>
        <img className={styles.frameChild11} alt="" src="/group-4.svg" />
        <div className={styles.ffef10c793a72c5f85a27fa3d17f75Parent}>
          <div className={styles.ffef10c793a72c5f85a27fa3d17f75} />
          <img
            className={styles.ffef10c793a72c5f85a27fa3d17f75Icon}
            alt=""
            src="/2ffef10c793a72c5f85a27fa3d17f758-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.frameParent10}>
        <div className={styles.wrapper6}>
          <div className={styles.b}>{` دليل المسلم الميسر `}</div>
        </div>
        <div
          className={styles.div12}
        >{`© الحقوق محفوظة لدليل المسلم الميسر 2024@  `}</div>
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
          <img
            className={styles.frameChild15}
            alt=""
            src="/frame-1984077254.svg"
          />
        </div>
      </div>

      <Sections dataAllSections={dataAllSections} />

      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
    </div>
  );
};

export default Frame;


export async function getStaticProps({ locale }) {
  const langIdEnvKey = `LANG_ID_${locale?.toUpperCase()}`;
  const langId = process.env[langIdEnvKey];

  const resPreliminaries = await fetch('https://iiacademy.net/api/preliminaries', {
    headers: {
      'locale': locale
    }
  })
  const dataPreliminaries = await resPreliminaries.json();

  const resAllSections = await fetch('https://iiacademy.net/api/categories', {
    headers: {
      'locale': locale
    }
  })
  const dataAllSections = await resAllSections.json();

  return {
    props: {
      dataPreliminaries: dataPreliminaries.data[0],
      dataAllSections: dataAllSections.data
    },

  };

}
