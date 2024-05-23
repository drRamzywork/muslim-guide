import Link from "next/link";
import Navbar from "../../src/components/Navbar";
import styles from "./index.module.scss";
import Footer from "../../src/components/Footer";
import { useRouter } from "next/router";

const Sections = ({ dataAllSections, dataAllLangs, dataPreliminaries }) => {
  const router = useRouter();

  return (
    <>
      <section dir={router.locale === 'ar' ? 'rtl' : 'ltr'} className={styles.div}>
        <Navbar dataAllLangs={dataAllLangs} dataAllSections={dataAllSections} dataPreliminaries={dataPreliminaries} />
        <div className={styles.header}>
          <div className={styles.child} />

          <div className="container flex-column d-flex  justify-content-start align-items-center">

            <div className={styles.wrapper2}>
              <b className={styles.b17}>الأقسام</b>
            </div>

            <div className={styles.div23}>
              يحتوي الكتاب على مجموعة مختلفة من الاقسام المختلفة لشرح الدين الاسلامي
              بطريقة سهلة ومبسطة وسريعة تصل بسهولة لجميع الاشخاص
            </div>
          </div>

        </div>

        <div className="container mb-4">

          <div className={styles.frameParent4}>
            <div className={styles.instanceParent}>
              {dataAllSections.map((category, idx) =>
                <Link href={`/section/${category.slug}`} className={styles.groupParent} key={idx}>
                  <img
                    className={styles.instanceChild}
                    alt=""
                    src="/group-1000006284.svg"
                  />
                  <div className={styles.group}>
                    <b className={styles.b4}>{category.name}</b>
                    <div className={styles.div10}>
                      {category.description}
                    </div>
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

export default Sections;

export async function getStaticProps({ locale }) {

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
  console.log(dataAllSections)
  console.log(dataAllLangs)
  console.log(dataPreliminaries)


  return {
    props: {
      dataAllSections: dataAllSections?.data,
      dataAllLangs: dataAllLangs?.data,
      dataPreliminaries: dataPreliminaries?.data[0]?.posts,

    },

  };

}