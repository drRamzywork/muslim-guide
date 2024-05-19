import Link from "next/link";
import Navbar from "../../src/components/Navbar";
import styles from "../preliminaries/index.module.scss";
import DetailsStyles from "../section/[slug]/index.module.scss";
import Footer from "../../src/components/Footer";
import { useRouter } from "next/router";


const Preliminaries = ({ dataAllSections }) => {
  const router = useRouter();

  return (
    <>

      <section dir={router.locale === 'ar' ? 'rtl' : 'ltr'} className={styles.div}>
        <Navbar />
        <div className={styles.header}>
          <div className={styles.child} />

          <div className="container flex-column d-flex  justify-content-start align-items-center">

            <div className={styles.wrapper2}>
              <b className={styles.b17}>المقدمات</b>
            </div>

            <div className={styles.div23}>
              أعظمُ مقاماتِ الإنسانِ عبوديتهُ لله وطاعتهُ لأوامره، فيها صلاح الدنيا والآخرة، فالدين يُسرٌ كله، وخيرٌ كله، وصلاحٌ كله. وهذه العبودية التي تشمل جميع جوانب الحياة، يجب أن تكون على علمٍ وبصيرة، ليكتمل بها الأجر وينجو بها من الزلل والزيغ
            </div>
          </div>

        </div>

        <div className="container mb-4 mt-4">

          <div className={DetailsStyles.frameParent5}>
            <div className={DetailsStyles.instanceParent}>
              {dataAllSections.map((post, idx) =>
                <Link href={`/details/${post.slug}`} keyt={idx} className={DetailsStyles.rectangleParent}>
                  <img
                    className={DetailsStyles.instanceChild}
                    alt=""
                    src="/rectangle-22541@2x.png"
                  />
                  <div className={DetailsStyles.wrapper3}>
                    <b className={DetailsStyles.b}>{post.name}</b>
                  </div>
                </Link>
              )}


            </div>

          </div>


        </div>
      </section>
      <Footer />

    </>


  );
};

export default Preliminaries;



export async function getStaticProps({ locale }) {
  const resAllSections = await fetch('https://iiacademy.net/api/categories', {
    headers: {
      'locale': locale
    }
  })
  const dataAllSections = await resAllSections.json();
  console.log(dataAllSections, 'dataAllSectionslogy')
  return {
    props: {
      dataAllSections: dataAllSections.data,
    },

  };

}

