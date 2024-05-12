
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../../../../pages/index.module.scss';
import componentStyles from './index.module.scss'

const HeroSection = ({ dataPreliminaries, activeSlide
  , setActiveSlide, imageUrls }) => {
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
            spaceBetween={0}
            slidesPerView={4}


            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current
            }}
            onSwiper={(swiper) => swiperRef.current = swiper}
            // onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}

            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange}
            dir="rtl" // Set direction to RTL
            modules={[Navigation, Pagination]}
          >
            <div className={styles.inner1}>
              <div className={styles.rectangleParent3}>

                {dataPreliminaries.posts.map((imageUrl, index) => (

                  <SwiperSlide key={index} >
                    {activeSlide === index ?
                      <div className={styles.groupDiv}>
                        <img
                          className={styles.groupChild}
                          alt=""
                          src={imageUrl.image}
                        />
                        <div className={styles.groupItem} />
                      </div>
                      :

                      <img
                        className={styles.frameChild3}
                        alt=""
                        src={imageUrl.image}
                      />
                    }

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


