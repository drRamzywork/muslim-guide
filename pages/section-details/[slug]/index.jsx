import { useEffect, useState } from "react";
import Footer from "../../../src/components/Footer";
import styles from "./index.module.scss";

const Details = ({ sectionData, dataAllSections }) => {
  const [content, setContent] = useState('');

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
  return (
    <>




      <div className={styles.div}>
        <div className={styles.header}>
          <div className={styles.child} />
          <div className={styles.wrapper2}>
            <b className={styles.b4}>{dataAllSections?.title}</b>
          </div>

        </div>



        <div className={styles.frameParent4}>
          <div className="container">
            <div className={styles.frameParent5}>
              <div dangerouslySetInnerHTML={{ __html: content }} />

              <div className={styles.frameParent6}>
                <div className={styles.rectangleWrapper}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-22543@2x.png"
                  />
                </div>
                <div className={styles.div10}>
                  وهي المصالح الكبرى التي لابد منها للإنسان ليعيش حياة كريمة، وجاءت
                  كل الشرائع بالأمر بحفظها والنهي عما يضادها.
                </div>
                <div className={styles.div10}>
                  ويعيش المجتمع المسلم أمة واحدة متماسكة كالبنيان يشد بعضه بعضاً،
                  وكالجســــد الواحـــــد إذا اشتكــــى منه عضو تداعى له سائر الجسد
                  بالحمى والسهر، ويكون حفظها بأمرين:
                </div>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameParent8}>
                    <div className={styles.group}>
                      <b className={styles.b}>الأمر الثاني</b>
                      <div className={styles.wrapper3}>
                        <b className={styles.b6}>2</b>
                      </div>
                    </div>
                    <div className={styles.div12}>صيانتها من العبث والخلل</div>
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.frameParent8}>
                    <div className={styles.group}>
                      <b className={styles.b}>الأمر الاول</b>
                      <div className={styles.wrapper3}>
                        <b className={styles.b8}>1</b>
                      </div>
                    </div>
                    <div className={styles.div12}>اقامتها ورعايتها</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent10}>
              <div className={styles.frameWrapper3}>
                <div className={styles.wrapper5}>
                  <b className={styles.b}>والضرورات الخمس كالتالي :-</b>
                </div>
              </div>
              <div className={styles.frameParent11}>
                <div className={styles.frameParent12}>
                  <div className={styles.frameParent13}>
                    <div className={styles.wrapper6}>
                      <b className={styles.b10}>الدين</b>
                    </div>
                    <div className={styles.wrapper7}>
                      <b className={styles.b11}>1</b>
                    </div>
                  </div>
                  <div
                    className={styles.div14}
                  >{`وهي القضية الكبرى التي خلق الله الناس من أجلها، وأرسل الرسل لتبليغها والمحافظة عليها، كما قال تعالى: }وَلَقَدْ بَعَثْنَا فِي كُلِّ أُمَّةٍ رَسُولًا أَنِ اعْبُدُوا اللهَ وَاجْتَنِبُوا الطَّاغُوتَ{(النحل: 36).`}</div>
                </div>
                <div className={styles.div10}>
                  وقد راعى الإسلام حفظ الدين وصيانته من كل ما يخدشه ويؤثر على صفوه
                  من الشرك والخرافات والمحدثات، أو المعاصي والمحرمات.
                </div>
                <div className={styles.frameParent12}>
                  <div className={styles.frameParent13}>
                    <div className={styles.wrapper6}>
                      <b className={styles.b10}>البدن</b>
                    </div>
                    <div className={styles.wrapper7}>
                      <b className={styles.b13}>2</b>
                    </div>
                  </div>
                  <div
                    className={styles.div14}
                  >{`وقد أمر الله بالمحافظة على النفس البشرية ولو أدى ذلك لارتكاب محرم، فإنه حين الاضطرار يكون معفواً عنه، كما قال تعالى:}فَمَنِ اضْطُرَّ غَيْرَ بَاغٍ وَلَا عَادٍ فَلَا إِثْمَ عَلَيْهِ إِنَّ اللهَ غَفُورٌ رَحِيمٌ{ (البقرة: 173).`}</div>
                </div>
                <div
                  className={styles.div10}
                >{`فنهى عن قتل النفس والإضرار بها، فقال تعالى: }ولاَ تُلْقُواْ بِأَيْدِيكُمْ إِلَى التَّهْلُكَةِ{(البقرة: 195).`}</div>
                <div
                  className={styles.div10}
                >{`وشرع العقوبات العادلة التي تمنع من الاعتداء على الناس بغير حق أياً كان دينهم فقال تعالى: }يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الْقِصَاصُ فِي الْقَتْلَى{(البقرة: 178)، وقال: }وَلَكُمْ فِي الْقِصَاصِ حَيَاةٌ يَا أُولِي الْأَلْبَابِ لَعَلَّكُمْ تَتَّقُونَ{(البقرة: 179)`}</div>
                <div className={styles.frameParent12}>
                  <div className={styles.frameParent13}>
                    <div className={styles.wrapper6}>
                      <b className={styles.b10}>العقل</b>
                    </div>
                    <div className={styles.wrapper7}>
                      <b className={styles.b13}>3</b>
                    </div>
                  </div>
                  <div className={styles.div14}>
                    فقد نهى الله عز وجل  عن كل ما يؤثر في العقل والإدراك؛ لأن العقل
                    أحد أعظم نعم الله علينا، وفيه قوام كرامة الإنسان وتميزه، وعليه
                    مدار المساءلة والحساب في الدنيا والآخرة.
                  </div>
                </div>
                <div
                  className={styles.div10}
                >{`ولهذا حرم الله الخمور والمخدرات بأنواعها وجعلها رجساً من عمل الشيطان، فقال تعالى: }يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ{(المائدة: 90).`}</div>
                <div className={styles.frameParent12}>
                  <div className={styles.frameParent13}>
                    <div className={styles.wrapper6}>
                      <b className={styles.b10}>النسل</b>
                    </div>
                    <div className={styles.wrapper7}>
                      <b className={styles.b17}>4</b>
                    </div>
                  </div>
                  <div className={styles.div14}>
                    ويظهر تأكيد الإسلام واهتمامه بالحفاظ على النسل وتكوين العائلة
                    والأسرة التي يتربى فيها النشء على معالي الأمور في عدد من
                    الأحكام، منها:
                  </div>
                </div>
                <div className={styles.parent2}>
                  <div className={styles.div1}>
                    <ul className={styles.ul}>
                      <li>{`حث الإسلام على الزواج وتيسيره وعدم المبالغة في تكاليفه، فقال تعالى:}وَأَنْكِحُوا الْأَيَامَى مِنْكُمْ{ (النور: 32).`}</li>
                    </ul>
                  </div>
                  <div className={styles.div23}>
                    <ul className={styles.ul}>
                      <li>{`حرَّم الإسلام جميع العلاقات الآثمة وسد جميع الطرق الموصلة إليها فقال تعالى: }وَلَا تَقْرَبُوا الزِّنَا إِنَّهُ كَانَ فَاحِشَةً وَسَاءَ سَبِيلًا{(الإسراء: 32).`}</li>
                    </ul>
                  </div>
                  <div className={styles.div23}>
                    <ul className={styles.ul}>
                      <li>
                        نهى عن اتهام الناس في أنسابهم وأعراضهم وجعل ذلك من كبائر
                        الذنوب وتوعد فاعله بعقوبة محددة في الدنيا، فضلاً عما يلاقيه
                        في الآخرة من العذاب.
                      </li>
                    </ul>
                  </div>
                  <div className={styles.div23}>
                    <ul className={styles.ul}>
                      <li>
                        أمر بالحفاظ على الشرف للرجل والمرأة، واعتبر من قُتل ليحافظ
                        على عرضه وعرض أهله شهيداً في سبيل الله .
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.frameParent20}>
                  <div className={styles.frameParent21}>
                    <div className={styles.wrapper6}>
                      <b className={styles.b10}>المال</b>
                    </div>
                    <div className={styles.wrapper7}>
                      <b className={styles.b13}>5</b>
                    </div>
                  </div>
                  <div className={styles.div10}>
                    فأوجب الإسلام للحفاظ على المال السعي في طلب الرزق وأباح
                    المعاملات والمبادلات والتجارة.
                  </div>
                  <div className={styles.div10}>
                    وللحفاظ عليه حرَّم الربا والسرقة والغش والخيانة وأكل أموال الناس
                    بالباطل، وتوعد القرآن من فعل ذلك بأشد العقوبات (انظر:ص206).
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


      <Footer />
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: sectionData?.body }} />
      </div>

    </>

  );
};

export default Details;
// import { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
// import Footer from "../../../src/components/Footer";
// import Navbar from "../../../src/components/Navbar";
// import styles from "./index.module.scss";


// // Dynamically import the TinyMCEEditor component to avoid SSR issues
// const TinyMCEEditor = dynamic(() => import('../../../src/components/TinyMCEEditor'), {
//   ssr: false
// });



// const Details = ({ dataAllSections }) => {
//   const [content, setContent] = useState('');


//   useEffect(() => {
//     if (dataAllSections) {
//       setContent(dataAllSections.body);
//     }
//   }, [dataAllSections]);
//   return (
//     <>
//       <div className="container">
//         <div>
//           <h2>Rendered Content</h2>
//           <div dangerouslySetInnerHTML={{ __html: content }} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Details;

export async function getServerSideProps({ params, locale }) {
  const { slug } = params;

  const res = await fetch(`https://iiacademy.net/api/category/${slug}`, {
    headers: {
      'locale': locale
    }
  });

  if (!res.ok) {
    console.error('Failed to fetch section:', res.statusText);
    return {
      notFound: true,
    };
  }

  const contentType = res.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    console.error('Invalid content type:', contentType);
    return {
      notFound: true,
    };
  }

  const data = await res.json();
  const resAllSections = await fetch('https://iiacademy.net/api/categories', {
    headers: {
      'locale': locale
    }
  })
  const dataAllSections = await resAllSections.json();

  console.log(sectionData)
  console.log(dataAllSections)

  return {
    props: {
      sectionData: data?.data,
      dataAllSections: dataAllSections?.data?.data || [],
    },
  };
}
