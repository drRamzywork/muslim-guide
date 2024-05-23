import Link from "next/link";
import styles from "../preliminaries/index.module.scss";
import DetailsStyles from "../section/[slug]/index.module.scss";
import Footer from "../../src/components/Footer";
import { useRouter } from "next/router";


const Preliminaries = ({ dataAllSections, dataAllLangs, dataPreliminaries, dataCategories }) => {
  const router = useRouter();
  return (
    <>

      <section dir={router.locale === 'ar' ? 'rtl' : 'ltr'} className={styles.div}>

        <div className={styles.header}>
          <div className={styles.child} />

          <div className="container flex-column d-flex  justify-content-start align-items-center">

            <div className={styles.wrapper2}>
              <b className={styles.b17}>{dataAllSections.name}</b>
            </div>

            <div className={styles.div23}>
              أعظمُ مقاماتِ الإنسانِ عبوديتهُ لله وطاعتهُ لأوامره، فيها صلاح الدنيا والآخرة، فالدين يُسرٌ كله، وخيرٌ كله، وصلاحٌ كله. وهذه العبودية التي تشمل جميع جوانب الحياة، يجب أن تكون على علمٍ وبصيرة، ليكتمل بها الأجر وينجو بها من الزلل والزيغ
            </div>
          </div>

        </div>

        <div className="container mb-4 mt-4">

          <div className={DetailsStyles.frameParent5}>
            <div className={DetailsStyles.instanceParent}>
              {dataAllSections.posts.map((post, idx) =>
                <Link href={`/details/${post.slug}`} keyt={idx} className={DetailsStyles.rectangleParent}>
                  <img
                    className={DetailsStyles.instanceChild}
                    alt=""
                    src={post.image}
                  />
                  <div className={DetailsStyles.wrapper3}>
                    <b className={DetailsStyles.b}>{post.title}</b>
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

  return {
    props: {
      dataAllSections: dataAllSections?.data[0] || {},
      dataAllLangs: dataAllLangs?.data || [],
      dataPreliminaries: dataPreliminaries?.data[0]?.posts || [],
      dataCategories: dataCategories?.data || []
    },
  };
}
