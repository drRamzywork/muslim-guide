import Link from "next/link";
import Navbar from "../../src/components/Navbar";
import styles from "./index.module.scss";
import Footer from "../../src/components/Footer";
import { useRouter } from "next/router";

const Sections = ({ dataAllSections }) => {
  const router = useRouter();
  return (
    <>
      <section dir={router.locale === 'ar' ? 'rtl' : 'ltr'} className={styles.div}>
        <Navbar />
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
                <Link href={`/section/${category.id}`} className={styles.groupParent} key={idx}>
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

  return {
    props: {
      dataAllSections: dataAllSections.data

    },

  };

}