import Link from "next/link";
import styles from "./index.module.scss";
import Footer from "../../src/components/Footer";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";
import Sajadah from "../../public/Sajadah";
import Navbar from "../../src/components/Navbar";

const Sections = ({ dataAllSections, dataAllSettings, dataAllLangs, dataPreliminaries }) => {

  return (
    <>
      <Navbar
        dataAllSections={dataAllSections}
        dataAllLangs={dataAllLangs}
        dataPreliminaries={dataPreliminaries}
        dataAllSettings={dataAllSettings}
      />

      <section dir={dataAllSettings.dir} className={styles.div}>

        <div className={styles.header}>
          <div className={styles.child} />

          <div className="container flex-column d-flex  justify-content-start align-items-center">

            <div className={styles.wrapper2}>
              <b className={styles.b17}>{dataAllSettings.sections}</b>
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

                  <div className={styles.img_container}>

                    <div className={styles.arrow_container}>
                      <IoArrowBack />
                    </div >

                    <img
                      className={styles.instanceChild}
                      alt=""
                      src={category.cover}
                    />

                    <div className={styles.icon_container}>
                      <Sajadah />
                    </div>
                  </div>

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
      </section >
      <Footer dataAllSettings={dataAllSettings} />

    </>
  );
};

export default Sections;

export async function getServerSideProps({ locale }) {
  // 

  const apiUrl = 'https://iiacademy.net/api';

  const fetchData = async (url, locale) => {
    try {
      const response = await fetch(`${apiUrl}/${url}`, {
        headers: { 'locale': locale }
      });
      if (!response.ok) {
        console.error(`Failed to fetch ${url}: ${response.status}`);
        return null;
      }
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error(`Invalid content type for ${url}: ${contentType}`);
        return null;
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${url}: ${error.message}`);
      return null;
    }
  };

  const dataAllSections = await fetchData('categories', locale);
  const dataAllLangs = await fetchData('languages', locale);
  const dataPreliminaries = await fetchData('preliminaries', locale);
  const dataAllSettings = await fetchData('settings', locale);

  return {
    props: {
      dataAllSections: dataAllSections?.data || [],
      dataAllLangs: dataAllLangs?.data || [],
      dataPreliminaries: dataPreliminaries?.data[0]?.posts || [],
      dataAllSettings: dataAllSettings?.data || [],

    },

  };

}