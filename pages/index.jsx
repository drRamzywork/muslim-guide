import { useState } from "react";
import HeroSection from "../src/components/Home/HeroSection";
import Navbar from "../src/components/Navbar";
import styles from "./index.module.scss";
import ExploreSec from "../src/components/Home/ExploreSec";
import Sections from "../src/components/Home/Sections";
import Footer from "../src/components/Footer";
import Introductions from "../src/components/Home/Introductions";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from 'next/router';
import { motion } from "framer-motion";


import { Navigation, Pagination, Autoplay, } from 'swiper/modules';

import { FaArrowLeft } from "react-icons/fa6";




const Frame = ({ dataPreliminaries, dataAllSections, dataAllLangs, dataAllSettings, dataSlider }) => {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <div className={styles.div}>


      <div
        className="desktop">

        <div className={styles.item} />
        <div className={styles.inner} dir={dataAllSettings.dir} />
        <div className={styles.child1} dir={dataAllSettings.dir} />
      </div>


      {
        router.pathname === '/' &&
        <Navbar dataAllSections={dataAllSections} dataPreliminaries={dataPreliminaries.posts} dataAllLangs={dataAllLangs} dataAllSettings={dataAllSettings} />
      }



      <motion.div initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 1.5, type: "tween" }} className="desktop">


        <div className="container position-relative" >
          <div className={styles.rectangleDiv} dir={dataAllSettings.dir} />
          <motion.div
            key={activeSlide}
            className={styles.hero_container}
            dir={dataAllSettings.dir}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img class="index_rectangleIcon__d516r" alt={dataSlider[activeSlide]?.title} src={dataSlider[activeSlide]?.image} />
            <div className={styles.frameParent1}>
              <img className={styles.child2} alt="" src="/frame-61.svg" />

              <div className={styles.wrapper1}>
                <b className={styles.b4}>{dataSlider[activeSlide]?.title}</b>
              </div>
              <div className={styles.div3}>
                {dataSlider[activeSlide]?.description}
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <Link href={`/sections`}>
                  <b className={styles.b5}>{dataAllSettings?.show_more}</b>
                </Link>

                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  {/* <img className={styles.arrowSmIcon} alt="" src="/arrowsm@2x.png" /> */}

                  <FaArrowLeft className={styles.arrowSmIcon} />

                </div>
              </div>
            </div>


          </motion.div>
          <section id="sss">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              navigation={false}
              pagination={{ clickable: true }}
              dir="rtl"
              modules={[Navigation, Pagination]}
            >
              {dataSlider?.map((imageUrl, index) => (
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



                      <div className={styles.rectangleParent}>
                        <div className={styles.frameChild} />
                        <b className={styles.b5}>{dataAllSettings?.show_more}</b>
                        <div className={styles.rectangleGroup}>
                          <div className={styles.frameItem} />
                          <img className={styles.arrowSmIcon} alt="" src="/arrowsm@2x.png" />
                        </div>
                      </div>

                      <Link href='/' className={styles.btn_container}>
                        <p>{dataAllSettings?.show_more}</p>
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
          dataSlider={dataSlider}
        />
      </motion.div>


      <div className="mobile">
        <div className={styles.header_mobile}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector.svg" />

          <div className={styles.sec_container}>

            <motion.div
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="container">

              <div className={styles.text_container}>
                <div className={styles.title}>
                  <h1>
                    {dataSlider[activeSlide]?.title}
                  </h1>
                </div>
                <div className={styles.desc}>
                  <p>
                    {dataSlider[activeSlide]?.description}
                  </p>
                </div>
                <div className={styles.btn_container2}>
                  <Link href={`/sections`}>
                    <p>{dataAllSettings?.show_more}</p>
                    <div className={styles.arro_container}>
                      <img src={'/arrow.png'} alt="" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>

            <div className={styles.swiperHeader}>
              <div className={styles.active_image_container}>

                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }} className={styles.main_image}>
                  <img src={dataSlider[activeSlide]?.image} alt={dataSlider[activeSlide]?.title} />
                </motion.div>



                <div className={styles.swiper_coninert}>
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    navigation={false}
                    dir="rtl"
                    centeredSlides={true}
                    onSlideChange={handleSlideChange}
                    className={styles.theSwiper}
                    id="mobileSwiper"
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{ delay: 8000, }}
                  >
                    {dataSlider?.map((imageUrl, index) => (
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

      <ExploreSec dataAllSettings={dataAllSettings} />




      <Sections dataAllSections={dataAllSections} dataAllSettings={dataAllSettings} />
      <Introductions dataPreliminaries={dataPreliminaries} dataAllSettings={dataAllSettings} />

      <Footer />

    </div >
  );
};

export default Frame;


export async function getServerSideProps({ locale }) {

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


  const resAllSettings = await fetch('https://iiacademy.net/api/settings', {
    headers: {
      'locale': locale
    }
  })
  const dataAllSettings = await resAllSettings.json();

  const resSlider = await fetch('https://iiacademy.net/api/f-section', {
    headers: {
      'locale': locale
    }
  })
  const dataSlider = await resSlider.json();


  return {
    props: {
      dataAllSections: dataAllSections?.data,
      dataPreliminaries: dataPreliminaries?.data[0],
      dataAllLangs: dataAllLangs?.data,
      dataAllSettings: dataAllSettings.data,
      dataSlider: dataSlider.data

    },
  };

}
