import { useRef, useState } from "react";
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
const Frame = ({ dataPreliminaries, dataAllSections, dataAllLangs }) => {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);


  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };


  return (
    <div className={styles.div}>
      <div className="desktop">

        <div className={styles.child} />
        <div className={styles.item} />
        <div className={styles.inner} dir={router.locale === 'ar' ? 'rtl' : 'ltr'} />
        <div className={styles.child1} dir={router.locale === 'ar' ? 'rtl' : 'ltr'} />
      </div>

      <Navbar dataAllSections={dataAllSections} dataPreliminaries={dataPreliminaries.posts} dataAllLangs={dataAllLangs} />



      <div className="desktop">


        <div className="container position-relative" >
          <div className={styles.rectangleDiv} dir={router.locale === 'ar' ? 'rtl' : 'ltr'} />

          <div className={styles.hero_container} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
            <img class="index_rectangleIcon__d516r" alt={dataPreliminaries?.posts[activeSlide].title} src={dataPreliminaries?.posts[activeSlide].image} />
            <div className={styles.frameParent1}>
              <img className={styles.child2} alt="" src="/frame-61.svg" />

              <div className={styles.wrapper1}>
                <b className={styles.b4}>{dataPreliminaries?.posts[activeSlide].title}</b>
              </div>
              <div className={styles.div3}>
                {dataPreliminaries?.posts[activeSlide].description}
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <Link href={`/sections`}>
                  <b className={styles.b5}>{`استكشف المزيد `}</b>
                </Link>

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
              {dataPreliminaries?.posts?.map((imageUrl, index) => (
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
          dataPreliminaries={dataPreliminaries}
        />
      </div>


      <div className="mobile">
        <div className={styles.header_mobile}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector.svg" />

          <div className={styles.sec_container}>
            <div className="container">

              <div className={styles.text_container}>
                <div className={styles.title}>
                  <h1>
                    {dataPreliminaries?.posts[activeSlide].title}
                  </h1>
                </div>
                <div className={styles.desc}>
                  <p>
                    {dataPreliminaries?.posts[activeSlide].description}
                    الصلاة هي عمود الدين وصلة العبد بربه ومولاه , ولذلك كانت أعظم العبادات وأجلها شأنا , وقد أمر الله المسلم بالمحافظة عليها
                  </p>
                </div>
                <div className={styles.btn_container2}>
                  <Link href={`/details${dataPreliminaries?.posts[activeSlide].slug}`}>
                    <p>استكشف المزيد </p>
                    <div className={styles.arro_container}>
                      <img src={'/arrow.png'} alt="" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.swiperHeader}>
              <div className={styles.active_image_container}>
                <div className={styles.main_image}>
                  <img src={dataPreliminaries?.posts[activeSlide].image} alt={dataPreliminaries?.posts[activeSlide].title} />
                </div>



                <div className={styles.swiper_coninert}>
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    navigation={false}
                    dir="rtl"
                    modules={[Navigation, Pagination]}
                    centeredSlides={true}
                    onSlideChange={handleSlideChange}
                    className={styles.theSwiper}
                    id="mobileSwiper"
                  >
                    {dataPreliminaries?.posts?.map((imageUrl, index) => (
                      <SwiperSlide key={index} >
                        <div className={`${styles.hero_container_mobile}  ${index === activeSlide && styles.active}`} >

                          <img
                            className={styles.rectangleIcon}
                            alt=""
                            src={imageUrl.image}
                          />

                        </div>
                      </SwiperSlide>
                    ))}

                  </Swiper>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <ExploreSec />



      <Sections dataAllSections={dataAllSections} />
      <Introductions dataPreliminaries={dataPreliminaries} />

      <Footer />

    </div>
  );
};

export default Frame;


export async function getStaticProps({ locale }) {

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

  const resAllLangs = await fetch('https://iiacademy.net/api/languages', {
    headers: {
      'locale': locale
    }
  })
  const dataAllLangs = await resAllLangs.json();

  return {
    props: {
      dataAllSections: dataAllSections.data,
      dataPreliminaries: dataPreliminaries.data[0],
      dataAllLangs: dataAllLangs.data
    },
  };

}
