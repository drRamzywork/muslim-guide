import React, { useRef, useState } from 'react'
import styles from '../../../../pages/index.module.scss';
import compStyles from './index.module.scss';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Sections = ({ dataAllSections, dataAllSettings }) => {
  const router = useRouter();
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  // const handleSlideChange = (swiper) => {
  //   setActiveSlide(swiper.activeIndex);
  // };
  // const handleSlideClick = (index) => {
  //   swiperRef?.current?.slideTo(index);
  // };
  // const handleSectionClick = (index) => {
  //   setActiveSection(index);
  // };

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleSlideClick = (index) => {
    swiperRef?.current?.slideTo(index);
    setActiveSlide(index); // Update activeSlide when a slide is clicked
  };

  const handleSectionClick = (index) => {
    setActiveSection(index);
    setActiveSlide(index); // Update activeSlide when a section is clicked
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };


  return (
    <section id='sections' className={compStyles.sections} dir={dataAllSettings.dir}>

      <div className="container">

        <motion.div initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "tween" }} className={styles.frameParent22}>
          <div className={styles.parent14}>
            <b className={styles.b25}>{dataAllSettings.sections}</b>
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
        </motion.div >
      </div>


      <motion.div initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: "tween" }} className={compStyles.swiper_mobile_sec}>
        <Swiper
          // spaceBetween={8}
          slidesPerView={2.1}
          pagination={{ clickable: true }}
          dir="rtl"
          modules={[Navigation, FreeMode]}
          initialSlide={1}
          onSwiper={(swiper) => swiperRef.current = swiper}
          onSlideChange={handleSlideChange}

          centeredSlides={true}
        >
          {dataAllSections.map((box, index) => (
            <SwiperSlide key={index} >
              <div onClick={() => handleSlideClick(index)} className={`${compStyles.box_container} ${activeSlide === index ? compStyles.active : ''}`}>
                <div className={compStyles.box}>
                  <div className={compStyles.img_container}>
                    <img src={box.cover} alt="" />
                  </div>
                  <div className={compStyles.title}>
                    <p>{box.name}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </motion.div>

      <div className="container">


        <div className={styles.frameParent13}>
          <motion.div initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, type: "tween" }} className={styles.frameParent14}>
            <div className={styles.parent6}>
              <b className={styles.b}>باقي الأقسام</b>
              <div className={styles.div18}>{dataAllSections.length} قسم</div>
            </div>
            <div className={styles.frameParent15} >
              <div className={styles.frameParent16}>
                {dataAllSections.map((sec, index) =>
                  <div dir={dataAllSettings.dir} className={`${styles.frameParent18} ${index === activeSection ? styles.active : ''}`} key={index} onClick={() => handleSectionClick(index)}>
                    <div className={styles.parent9}>
                      <b className={styles.b8}>{sec.name}</b>
                      <div className={styles.div22} dir='rtl'>
                        {sec.description}
                      </div>
                    </div>
                    <img
                      className={styles.frameChild16}
                      alt=""
                      src={sec.cover}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div >

          <div className={'mobile'}>
            <div className={styles.rectangleParent6}>
              <img
                className={styles.frameChild20}
                alt=""
                src={dataAllSections[activeSlide].cover}
              />

              <div className={styles.frameParent21} >
                <div className={styles.group}>
                  <b className={styles.b}>{dataAllSections[activeSlide].name}</b>
                  <div className={styles.div4}>
                    {dataAllSections[activeSlide].description}
                  </div>
                </div>
                <b className={styles.b24}>{dataAllSettings.show_more}</b>
              </div>

            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, type: "tween" }} className={'desktop'}>

            <motion.div
              key={activeSection}
              dir={dataAllSettings.dir}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }} className={styles.rectangleParent6}>
              <img
                className={styles.frameChild20}
                alt=""
                src={dataAllSections[activeSlide].cover} />

              <div className={styles.frameParent21} >
                <div className={styles.group}>
                  <b className={styles.b}>{dataAllSections[activeSection]?.name}</b>
                  <div className={styles.div4}>
                    {dataAllSections[activeSection]?.description}
                  </div>
                </div>
                <Link href={`/section/${dataAllSections[activeSection]?.slug}`} className={styles.b24}>{dataAllSettings.show_more}</Link>
              </div>


            </motion.div>


          </motion.div>

          {/* <Link href='/' className={styles.link}>استكشف المزيد</Link> */}
        </div>

      </div>

      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector.svg" />

    </section>

  )
}

export default Sections