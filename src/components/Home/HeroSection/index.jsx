
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import styles from '../../../../pages/index.module.scss';
import componentStyles from './index.module.scss'

const HeroSection = ({ dataSlider, activeSlide
  , setActiveSlide, }) => {
  const swiperRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

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
    <section id='hero' className={componentStyles.hero} dir='rtl'>

      <div className="container">

        <div className={componentStyles.sec_container}>
          <Swiper
            // spaceBetween={8}
            slidesPerView={3}
            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current
            }}
            onSwiper={(swiper) => swiperRef.current = swiper}
            onSlideChange={handleSlideChange}
            dir="rtl"
            modules={[Navigation, Pagination, Autoplay]}
            centeredSlides={true}
            autoplay={{ delay: 8000, }}

          >
            <div className={styles.inner1}>
              <div className={styles.rectangleParent3}>
                {dataSlider?.map((imageUrl, index) => (
                  <SwiperSlide key={index} >
                    <div className={`${componentStyles.box} ${activeSlide === index && componentStyles.active}`}>
                      <img src={imageUrl.image} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </div>

            </div>
          </Swiper>
          <div ref={prevButtonRef} className={styles.rectangleParent0}>
            <div className={styles.frameChild2} />
            <img className={styles.arrowSmIcon1} alt="" src="/arrowsm@2x.png" />
          </div>
          <div ref={nextButtonRef} className={styles.rectangleParent2}>
            <div className={styles.frameChild2} />
            <img className={styles.arrowSmIcon1} alt="" src="/arrowsm@2x.png" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;


