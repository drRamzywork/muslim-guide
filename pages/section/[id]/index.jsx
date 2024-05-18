import Link from "next/link";
import styles from "./index.module.scss";
import Footer from "../../../src/components/Footer";
import Navbar from "../../../src/components/Navbar";

const Sections = ({ dataAllSections }) => {
  return (
    <>
      <div className={styles.div}>
        <div className={styles.child} />

        <div className="container mb-4">

          <Navbar />
          <div className={styles.header}>
            <div className={styles.wrapper2}>
              <b className={styles.b17}>الأقسام</b>
            </div>

            <div className={styles.div23}>
              يحتوي الكتاب على مجموعة مختلفة من الاقسام المختلفة لشرح الدين الاسلامي
              بطريقة سهلة ومبسطة وسريعة تصل بسهولة لجميع الاشخاص
            </div>

          </div>

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

      </div>
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