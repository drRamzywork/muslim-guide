import Footer from "../../../src/components/Footer";
import Navbar from "../../../src/components/Navbar";
import styles from "./index.module.scss";

const Section = () => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <div className={styles.item} />
      <div className={styles.inner} />
      <Navbar />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-22519@2x.png"
      />

      <div className="container">

        <div className={styles.frameParent1}>
          <div className={styles.wrapper1}>
            <b className={styles.b4}>ايمان المسلم</b>
          </div>
          <div className={styles.div3}>
            اتفقت جميع رسالات الأنبياء لأقوامهم على عبادة الله وحده لا شريك له
            والكفر بما يعبد من دون الله وهذا هو حقيقة معنى لا إله إلا الله محمد
            رسول الله، وهي الكلمة التي يدخل بها المرء في دين الله.
          </div>
        </div>


        <div className="sec_container">

        </div>

      </div>


      <div className={styles.frameParent5}>
        <div className={styles.instanceParent}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22541@2x.png"
            />
            <div className={styles.wrapper3}>
              <b className={styles.b}>ما حقيقة العبادة</b>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22541@2x.png"
            />
            <div className={styles.wrapper3}>
              <b className={styles.b}>الايمان بالله</b>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22541@2x.png"
            />
            <div className={styles.wrapper3}>
              <b className={styles.b}>الشهاداتان معناهما ومقتضاهما</b>
            </div>
          </div>
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22541@2x.png"
            />
            <div className={styles.wrapper3}>
              <b className={styles.b}>الايمان بالملائكة</b>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22541@2x.png"
            />
            <div className={styles.wrapper3}>
              <b className={styles.b}>الايمان بأسماء الله وصفاته</b>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22541@2x.png"
            />
            <div className={styles.wrapper3}>
              <b className={styles.b}>الشرك</b>
            </div>
          </div>
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22541@2x.png"
            />
            <div className={styles.wrapper3}>
              <b className={styles.b}>عقيدة المسلم في عيسى عليه السلام</b>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22541@2x.png"
            />
            <div className={styles.wrapper3}>
              <b className={styles.b}>الايمان بالرسل</b>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22541@2x.png"
            />
            <div className={styles.wrapper3}>
              <b className={styles.b}>الايمان بالكتب</b>
            </div>
          </div>
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22541@2x.png"
            />
            <div className={styles.wrapper3}>
              <b className={styles.b}>الايمان باليوم الآخر</b>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22541@2x.png"
            />
            <div className={styles.wrapper3}>
              <b className={styles.b}>صحابة رسول الله وآل بيته الكرام</b>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22541@2x.png"
            />
            <div className={styles.wrapper3}>
              <b className={styles.b}>الايمان بمحمد نبيا ورسولا</b>
            </div>
          </div>
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22541@2x.png"
            />
            <div className={styles.wrapper3}>
              <b className={styles.b}>الاسلام والفرق الضالة</b>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/rectangle-22541@2x.png"
            />
            <div className={styles.wrapper3}>
              <b className={styles.b}>الايمان بالقدر</b>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Section;



// export async function getStaticProps({ params, locale }) {
//   const { slug } = params;
//   const resSections = await fetch(`https://iiacademy.net/api/categories/${slug}`, {
//     headers: {
//       'locale': locale
//     }
//   });
//   const dataSection = await resSections.json();
//   console.log(dataSection, "resSections");

//   return {
//     props: {
//       dataSection: dataSection.data,

//     },
//   };
// }

// export async function getStaticPaths() {
//   // Fetch all sections to get the slugs
//   const resAllSections = await fetch('https://iiacademy.net/api/categories', {
//     headers: {
//       'locale': 'en' // You can choose a default locale here if needed
//     }
//   });
//   const dataAllSections = await resAllSections.json();

//   // Map the fetched slugs to the paths array
//   const paths = dataAllSections.data.map(section => ({
//     params: { slug: section.slug }
//   }));

//   return {
//     paths,
//     fallback: 'blocking', // Will server-render pages on-demand if the path doesn't exist
//   };
// }
