import { useEffect, useRef, useState } from "react";
import Footer from "../../../src/components/Footer";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import Navbar from "../../../src/components/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, } from 'swiper/modules';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const Details = ({ sectionData, dataAllSections, dataAllSettings, dataAllLangs, dataPreliminaries }) => {
  const [content, setContent] = useState('');

  // Swiper

  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef();
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  useEffect(() => {
    if (sectionData) {
      setContent(sectionData.body);
    }
  }, [sectionData]);

  useEffect(() => {
    const handler = (e) => {
      if (e.target.closest(".tox-tinymce-aux, .moxman-window, .tam-assetmanager-root") !== null) {
        e.stopImmediatePropagation();
      }
    };
    document.addEventListener("focusin", handler);
    return () => document.removeEventListener("focusin", handler);
  }, []);


  const renderChildrenContent = (children) => {
    return children?.map((child, index) => (
      child.body ? (
        <>
          <h2 className="text-3xl w-full font-extrabold leading-[50px] text-gray-50 bg-main-color p-4  lg:text-3xl dark:text-white custom-border-radius">
            {child.title} :- </h2>
          <div key={index} className={styles.childContent} dangerouslySetInnerHTML={{ __html: child.body }} />
        </>

      ) : null
    ));
  };


  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const breakpoints = {
    // default (for screens < 640px)
    0: {
      slidesPerView: 1.5,
      spaceBetween: 14,
    },
    // when window width is >= 640px (mobile)
    640: {
      slidesPerView: 1.5,
      spaceBetween: 14,
    },
    // when window width is >= 768px (md screen)
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    // when window width is >= 1024px (large screen)
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  };
  console.log(sectionData, "sectionData")


  return (
    <>

      <Navbar
        dataAllSections={dataAllSections}
        dataAllLangs={dataAllLangs}
        dataPreliminaries={dataPreliminaries}
        dataAllSettings={dataAllSettings}
      />



      <div className={styles.div} dir={dataAllSettings.dir} >
        <div className={styles.header}>
          <div className={styles.child} />

          <motion.div initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: "tween" }} className={styles.wrapper2}>
            <b className={styles.b4}>{sectionData?.title}</b>
          </motion.div>

        </div>

        <div className="container">
          <div className={styles.swiper_container}>
            <Swiper
              // spaceBetween={20}
              // slidesPerView={2.5}
              breakpoints={breakpoints}
              navigation={{
                nextEl: nextButtonRef.current,
                prevEl: prevButtonRef.current
              }}
              onS dir="rtl"
              modules={[Navigation,]}
              onSwiper={(swiper) => swiperRef.current = swiper}

            >
              {sectionData?.children?.map((child, index) => (
                <SwiperSlide key={index} >
                  <a href={`#${child.slug}`} onClick={() => handleSlideChange(index)} className={`${activeSlide === index && styles.active}`}>
                    <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }}
                      transition={{ duration: 1.5, type: "tween" }} className={styles.rectangleParent4}>
                      <h2>{child.title}</h2>
                    </motion.div>
                  </a>
                </SwiperSlide>
              ))}

            </Swiper>


            <div ref={prevButtonRef} className={'custom_arrow'}>
              <IoIosArrowRoundBack />

            </div>
            <div ref={nextButtonRef} className={'custom_arrow1'}>
              <IoIosArrowRoundForward />

            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "tween" }} className={styles.frameParent4}>
          <div className="container">
            <div >
              {renderChildrenContent(sectionData.children)}

              {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
            </div>


          </div>

        </motion.div>

      </div>


      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: dataAllSections?.body }} />
      </div>
      <Footer dataAllSettings={dataAllSettings} />

    </>
  );
};

export default Details;

export async function getServerSideProps({ params, locale }) {
  const { slug } = params;

  const res = await fetch(`https://iiacademy.net/api/post/${slug}?removeClass=1`, {
    headers: {
      'locale': locale
    }
  });



  const data = await res.json();

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

  const resPreliminaries = await fetch('https://iiacademy.net/api/preliminaries', {
    headers: {
      'locale': locale
    }
  })
  const dataPreliminaries = await resPreliminaries.json();



  const resAllSettings = await fetch('https://iiacademy.net/api/settings', {
    headers: {
      'locale': locale
    }
  })
  const dataAllSettings = await resAllSettings.json();




  return {
    props: {
      dataAllSections: dataAllSections?.data || [],
      sectionData: data?.data || [],
      dataAllLangs: dataAllLangs?.data || [],
      dataPreliminaries: dataPreliminaries?.data[0]?.posts || [],
      dataAllSettings: dataAllSettings?.data || [],

    },
  };
}
