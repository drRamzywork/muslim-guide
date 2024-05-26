import React, { useEffect, useRef, useState } from 'react';
import compStyles from './index.module.scss';
import styles from '../../../../pages/index.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Introductions = ({ dataPreliminaries, dataAllSettings }) => {
  const swiperRef = useRef();
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(2);
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance) {
      const updateNavigationVisibility = () => {
        if (swiperInstance.isBeginning) {
          nextButtonRef.current.style.display = 'none';
        } else {
          nextButtonRef.current.style.display = 'block';
        }
      };

      swiperInstance.on('slideChange', updateNavigationVisibility);

      // Initialize the visibility state
      updateNavigationVisibility();

      return () => {
        swiperInstance.off('slideChange', updateNavigationVisibility);
      };
    }
  }, []);
  return (
    <section id='introductions' className={compStyles.Introductions} dir={dataAllSettings.dir}>
      <div className="container">
        <div className={compStyles.sec_container}>
          <b className={styles.b13}>دليل المسلم الميسر</b>

          <motion.div initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: "tween" }} className={styles.wrapper3}>
            <Link href={'/preliminaries'} className={styles.b14}>
              <div>{`هيا بنا نستكشف `}</div>
              <span className={styles.span}>{dataAllSettings.preliminaries}</span>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: "tween" }} className={styles.div9}>
            <p>
              {dataAllSettings.word_publisher}
            </p>
          </motion.div>

          <div className={styles.child3} />

          <div className={compStyles.desktop_swiper}
            dir='rtl'
          >
            <div className={styles.arrowParent}>
              <Swiper
                spaceBetween={15}
                slidesPerView={3}
                centeredSlides={true}
                initialSlide={2}
                navigation={{
                  nextEl: nextButtonRef.current,
                  prevEl: prevButtonRef.current
                }}
                onSwiper={(swiper) => swiperRef.current = swiper}
                // onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}

                pagination={{ clickable: true }}
                className={compStyles.swiper}
                onSlideChange={handleSlideChange}
                modules={[Navigation, Pagination]}
              >
                <div className={styles.instanceParent}>

                  {dataPreliminaries?.posts?.map((imageUrl, index) => (

                    <SwiperSlide key={index} >
                      {activeSlide === index ?
                        <Link href={`/details/${imageUrl.slug}`}>

                          <div className={styles.rectangleParent4}>
                            <img
                              className={styles.instanceChild}
                              alt=""
                              src={imageUrl.image}
                            />
                            <div className={styles.wrapper4}>
                              <b className={styles.b}>{imageUrl.title}</b>
                            </div>
                          </div>
                        </Link>
                        :
                        <img
                          className={styles.frameChild8}
                          alt=""
                          src={imageUrl.image}
                        />
                      }

                    </SwiperSlide>
                  ))}
                </div>

              </Swiper>

              <div ref={prevButtonRef} className={'custom_arrow'}>
                <img className={styles.arrowIcon1} alt="" src="/arrow@2x.png" />
              </div>
              <div ref={nextButtonRef} className={'custom_arrow1'}>
                <img className={styles.arrowIcon1} alt="" src="/arrow@2x.png" />
              </div>
            </div>
          </div>


        </div>

      </div>

      <div className={compStyles.mobile_swiper}>
        <div className={styles.arrowParent}>
          <Swiper
            spaceBetween={15}
            slidesPerView={3}
            centeredSlides={true}
            initialSlide={2}
            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current
            }}
            onSwiper={(swiper) => swiperRef.current = swiper}
            breakpoints={
              {
                450: {
                  slidesPerView: 2,
                }
              }}

            pagination={{ clickable: true }}
            className={compStyles.swiper}
            onSlideChange={handleSlideChange}
            modules={[Navigation, Pagination]}
          >
            <div className={styles.instanceParent}>

              {dataPreliminaries?.posts?.map((imageUrl, index) => (

                <SwiperSlide key={index} >
                  {activeSlide === index ?
                    <div className={styles.rectangleParent4}>
                      <img
                        className={styles.instanceChild}
                        alt=""
                        src={imageUrl.image}
                      />
                      <div className={styles.wrapper4}>
                        <b className={styles.b}>{imageUrl.title}</b>
                      </div>
                    </div>
                    :

                    <img
                      className={styles.frameChild8}
                      alt=""
                      src={imageUrl.image}
                    />
                  }

                </SwiperSlide>
              ))}
            </div>

          </Swiper>

          <div ref={prevButtonRef} className={'custom_arrow'}>
            <img className={styles.arrowIcon1} alt="" src="/arrow@2x.png" />
          </div>
          <div ref={nextButtonRef} className={'custom_arrow1'}>
            <img className={styles.arrowIcon1} alt="" src="/arrow@2x.png" />
          </div>
        </div>
      </div>

      <div className={styles.frame1} dir={dataAllSettings.dir}>
        <div className="container">
          <img className={styles.groupIcon} alt="" src="/group-2.svg" />
          <img className={styles.frameChild10} alt="" src="/group-3.svg" />

          <div className={compStyles.sec_container2}>
            <motion.div initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween" }} className={styles.frameParent9}>
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
                <div className={compStyles.book_container}>
                  <a href='https://iiacademy.net/media/files/PDFBooks/دليل المسلم الميسر (The Simplified Muslim Guide_AR).pdf' target='_blank' className={styles.wrapper5}>
                    <b className={styles.b8}>حمل الكتاب الآن</b>

                  </a>


                  <a href='https://iiacademy.net/media/files/PDFBooks/دليل المسلم الميسر (The Simplified Muslim Guide_AR).pdf' target='_blank' className={styles.ffef10c793a72c5f85a27fa3d17f75Parent}>
                    <div className={styles.ffef10c793a72c5f85a27fa3d17f75} />
                    <img
                      className={styles.ffef10c793a72c5f85a27fa3d17f75Icon}
                      alt=""
                      src="/2ffef10c793a72c5f85a27fa3d17f758-1@2x.png"
                    />
                  </a>
                </div>
                <div className={compStyles.book_container_desktop}>
                  <a href='https://iiacademy.net/media/files/PDFBooks/دليل المسلم الميسر (The Simplified Muslim Guide_AR).pdf' target='_blank' className={styles.wrapper5}>
                    <b className={styles.b8}>حمل الكتاب الآن</b>

                  </a>

                </div>
              </div>

            </motion.div >

            <motion.div initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween" }} className={compStyles.book_desktop}>

              <a href='https://iiacademy.net/media/files/PDFBooks/دليل المسلم الميسر (The Simplified Muslim Guide_AR).pdf' target='_blank' className={styles.ffef10c793a72c5f85a27fa3d17f75Parent}>
                <div className={styles.ffef10c793a72c5f85a27fa3d17f75} />
                <img
                  className={styles.ffef10c793a72c5f85a27fa3d17f75Icon}
                  alt=""
                  src="/2ffef10c793a72c5f85a27fa3d17f758-1@2x.png"
                />
              </a>
            </motion.div>

          </div>



        </div>

      </div>

    </section >
  )
}

export default Introductions