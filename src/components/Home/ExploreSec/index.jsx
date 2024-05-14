import React from 'react'
import styles from '../../../../pages/index.module.scss';
import compStyles from './index.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ExploreSec = () => {
  const data = [
    {
      title: 'موثوقية المحتوى', icon: "/frame-1000006304.svg", desc: `يتميز كتابنا بالمصداقية والدقة، حيث يتم تقديم المعلومات بناءً على
  مصادر موثوقة وباعتماد على العلماء المعتمدين.
`},
    {
      title: 'السهولة في الوصول', icon: "/frame-1984077215.svg", desc: `                  يصل القراء إلى المحتوى بسهولة عبر منصتنا الإلكترونية، مما يتيح لهم
      الاستفادة من الكتاب في أي وقت ومن أي مكان.

`},
    {
      title: 'تنوع اللغات ', icon: "/frame-10000063041.svg", desc: `                  حيث يتوفر كتاب دليل المسلم الميسر بأكثر من ١٥ لغة، مما يسهل على
      القراء من مختلف الثقافات والخلفيات الاستفادة من محتواه.

`},
    {
      title: 'القوالب الالكترونية المميزة', icon: "/frame-19840772151.svg", desc: `                  نقدم المحتوى بأشكال إلكترونية مبتكرة ومميزة تجعل تجربة القراءة
      والتفاعل مع الكتاب سهلة وممتعة.

`},

  ];

  return (
    <section id='explore' className={compStyles.explore} dir='rtl'>
      <div className="container">
        <div className={compStyles.sec_container}>


          <div className={compStyles.boxes_container}>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.parent1}>
                  <b className={styles.b}>موثوقية المحتوى</b>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-1000006304.svg"
                  />
                </div>
                <div className={styles.div5}>
                  <p className={styles.p}>
                    يتميز كتابنا بالمصداقية والدقة، حيث يتم تقديم المعلومات بناءً على
                    مصادر موثوقة وباعتماد على العلماء المعتمدين.
                  </p>
                  <p className={styles.p}></p>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.parent1}>
                  <b className={styles.b}>السهولة في الوصول</b>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-1984077215.svg"
                  />
                </div>
                <div className={styles.div6}>
                  يصل القراء إلى المحتوى بسهولة عبر منصتنا الإلكترونية، مما يتيح لهم
                  الاستفادة من الكتاب في أي وقت ومن أي مكان.
                </div>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.frameParent4}>
                <div className={styles.parent3}>
                  <b className={styles.b}>{`تنوع اللغات `}</b>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-10000063041.svg"
                  />
                </div>
                <div className={styles.div6}>
                  حيث يتوفر كتاب دليل المسلم الميسر بأكثر من ١٥ لغة، مما يسهل على
                  القراء من مختلف الثقافات والخلفيات الاستفادة من محتواه.
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.parent4}>
                  <b className={styles.b12}>القوالب الالكترونية المميزة</b>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-19840772151.svg"
                  />
                </div>
                <div className={styles.div6}>
                  نقدم المحتوى بأشكال إلكترونية مبتكرة ومميزة تجعل تجربة القراءة
                  والتفاعل مع الكتاب سهلة وممتعة.
                </div>
              </div>
            </div>
          </div>



          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper1}>
              <div className={styles.group}>
                <b className={styles.b7}>
                  <span>{`نبذة مختصرة عن كتاب `}</span>
                  <span className={styles.span}>دليل المسلم الميسر</span>
                </b>
                <div className={styles.div4}>
                  هو كتاب شامل يهدف إلى توفير مصدر موثوق وسهل الوصول للمعلومات
                  الدينية الإسلامية. يتناول الكتاب مجموعة واسعة من الموضوعات الدينية
                  بطريقة مبسطة وميسرة، مما يجعله مناسبا لجميع فئات المسلمين بغض
                  النظر عن مستوى معرفتهم الدينية.
                </div>
              </div>
            </div>
            <div className={styles.wrapper2}>
              <b className={styles.b8}>حمل الكتاب الآن</b>
            </div>
          </div>

        </div>


      </div>

      <div className={compStyles.boxes_container_mobile}>
        <Swiper
          spaceBetween={8}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          dir="rtl"
          modules={[Navigation,]}
          centeredSlides={true}
          initialSlide={2}

        >
          {data.map((box, index) => (
            <SwiperSlide key={index} >
              <div className={styles.frameParent3}>

                <div className={styles.frameParent4}>
                  <div className={styles.parent1}>
                    <b className={styles.b}>{box.title}</b>
                    <img
                      className={styles.frameIcon}
                      alt={box.title}
                      src={box.icon}
                    />
                  </div>
                  <div className={styles.div5}>
                    <p className={styles.p}>
                      {box.desc}
                    </p>
                    <p className={styles.p}></p>
                  </div>
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  )
}

export default ExploreSec