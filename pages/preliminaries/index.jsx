import Link from "next/link";
import styles from "../preliminaries/index.module.scss";
import DetailsStyles from "../section/[slug]/index.module.scss";
import Footer from "../../src/components/Footer";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Preliminaries = ({ dataAllSections, dataAllSettings, dataPreliminaries, dataCategories }) => {
  const router = useRouter();
  return (
    <>

      <section dir={dataAllSettings.dir} className={styles.div}>

        <div className={styles.header}>
          <div className={styles.child} />

          <div className="container flex-column d-flex  justify-content-start align-items-center">

            <motion.div initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween" }} className={styles.wrapper2}>
              <b className={styles.b17}>{dataAllSections.name}</b>
            </motion.div >

            <motion.div initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween" }} className={styles.div23}>
              أعظمُ مقاماتِ الإنسانِ عبوديتهُ لله وطاعتهُ لأوامره، فيها صلاح الدنيا والآخرة، فالدين يُسرٌ كله، وخيرٌ كله، وصلاحٌ كله. وهذه العبودية التي تشمل جميع جوانب الحياة، يجب أن تكون على علمٍ وبصيرة، ليكتمل بها الأجر وينجو بها من الزلل والزيغ
            </motion.div >
          </div>

        </div>

        <div className="container mb-4 mt-4">

          <div className={styles.frameParent5}>
            <div className={DetailsStyles.instanceParent}>
              {dataAllSections.posts.map((post, idx) =>

                <motion.div initial={{ opacity: 0, y: 2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, type: "tween" }}
                  key={idx}
                  className={DetailsStyles.rectangleParent}
                >

                  <Link href={`/details/${post.slug}`} >
                    <img
                      className={DetailsStyles.instanceChild}
                      alt=""
                      src={post.image}
                    />
                    <div className={DetailsStyles.wrapper3}>
                      <b className={DetailsStyles.b}>{post.title}</b>
                    </div>
                  </Link>
                </motion.div>

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



export async function getServerSideProps({ locale }) {
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

  const dataAllSections = await fetchData('preliminaries', locale);
  const dataAllLangs = await fetchData('languages', locale);
  const dataPreliminaries = await fetchData('preliminaries', locale);
  const dataCategories = await fetchData('categories', locale);
  const dataAllSettings = await fetchData('settings', locale);



  return {
    props: {
      dataAllSections: dataAllSections?.data[0] || {},
      dataAllLangs: dataAllLangs?.data || [],
      dataPreliminaries: dataPreliminaries?.data[0]?.posts || [],
      dataCategories: dataCategories?.data || [],
      dataAllSettings: dataAllSettings?.data || []
    },
  };
}
