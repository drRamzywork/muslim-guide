import { useState } from "react";
import HeroSection from "../src/components/Home/HeroSection";
import Navbar from "../src/components/Navbar";
import styles from "./index.module.scss";
import ExploreSec from "../src/components/Home/ExploreSec";
import Sections from "../src/components/Home/Sections";
import Footer from "../src/components/Footer";
import Introductions from "../src/components/Home/Introductions";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from 'next/router';
const Frame = ({ dataPreliminaries, dataAllSections }) => {
  const router = useRouter();
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



  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <div className={styles.item} />
      <div className={styles.inner} dir={router.locale === 'ar' ? 'rtl' : 'ltr'} />
      <div className={styles.child1} dir={router.locale === 'ar' ? 'rtl' : 'ltr'} />

      <Navbar />



      <div className="container position-relative" >
        <div className={styles.rectangleDiv} dir={router.locale === 'ar' ? 'rtl' : 'ltr'} />

        <div className={styles.hero_container} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
          <img
            className={styles.rectangleIcon}
            alt=""
            // src="/rectangle-22519@2x.png"
            src={dataPreliminaries.posts[activeSlide].image}
          />

          <div className={styles.frameParent1}>
            <img className={styles.child2} alt="" src="/frame-61.svg" />

            <div className={styles.wrapper1}>
              <b className={styles.b4}>{dataPreliminaries.posts[activeSlide].title}</b>
            </div>
            <div className={styles.div3}>
              {dataPreliminaries.posts[activeSlide].description}
              {console.log(dataPreliminaries.posts[activeSlide], "ACTIVE")}
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



        </div>

        <section id="sss">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            dir="rtl"
            modules={[Navigation, Pagination]}
          >
            {dataPreliminaries.posts.map((imageUrl, index) => (
              <SwiperSlide key={index} >
                <div className={styles.hero_container_mobile} >

                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src={imageUrl.image}
                  />
                  <div className={styles.frameParent1}>
                    <img className={styles.child2} alt="" src="/frame-61.svg" />

                    <div className={styles.wrapper1}>
                      <b className={styles.b4}>{imageUrl.title}</b>
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

                    <Link href='/' className={styles.btn_container}>
                      <p>استكشف المزيد</p>
                      <div className={styles.icon_container}>
                        <IoArrowBack />
                      </div>
                    </Link>

                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </section>


      </div>

      <HeroSection
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        imageUrls={imageUrls}
        dataPreliminaries={dataPreliminaries}
      />

      <ExploreSec />



      <Sections dataAllSections={dataAllSections} />
      <Introductions dataPreliminaries={dataPreliminaries} />

      <Footer />

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
