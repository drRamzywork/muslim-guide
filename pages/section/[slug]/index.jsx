import { useRouter } from "next/router";
import Navbar from "../../../src/components/Navbar";
import styles from "./index.module.scss";
import Link from "next/link";
import Footer from "../../../src/components/Footer";
import { motion } from "framer-motion";

const Section = ({ dataSections, dataAllSections,
  dataAllLangs,
  dataPreliminaries,
  dataAllSettings
}) => {
  const router = useRouter();
  return (
    <>
      <section dir={router.locale === 'ar' ? 'rtl' : 'ltr'} className={styles.div}>
        <div className={styles.child} />
        <div className={styles.item} />
        <div className={styles.inner} />
        <Navbar dataAllSections={dataAllSections} dataPreliminaries={dataPreliminaries} dataAllLangs={dataAllLangs} dataAllSettings={dataAllSettings} />


        <div className="container">
          <div className={styles.sec_container}>
            <motion.div initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween" }} className={styles.img_container}>
              <img
                className={styles.rectangleIcon}
                alt={dataSections.name}
                src={dataSections.cover}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween" }} className={styles.text_container}>
              <div className={styles.frameParent1}>
                <div className={styles.wrapper1}>
                  <b className={styles.b4}>{dataSections.name}</b>

                </div>
                <div className={styles.div3}>
                  <div dangerouslySetInnerHTML={{ __html: dataSections.description }} />
                </div>
              </div>
            </motion.div>

          </div>

          <div className={styles.frameParent5}>
            <div className={styles.instanceParent}>
              {dataSections.posts.map((post, idx) =>
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, type: "tween" }}
                  className={styles.rectangleParent}
                >
                  <Link href={`/details/${post.slug}`} >
                    <img
                      className={styles.instanceChild}
                      alt=""
                      src={post.icon}
                    />

                    <div className={styles.wrapper3}>
                      <b className={styles.b}>{post.title}</b>
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

export default Section;



// pages/sections/[slug].js

// pages/sections/[slug].js

export async function getServerSideProps({ params, locale }) {
  const { slug } = params;

  const res = await fetch(`https://iiacademy.net/api/category/${slug}`, {
    headers: {
      'locale': locale
    }
  });


  const data = await res.json();

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


  const resAllSettings = await fetch('https://iiacademy.net/api/settings', {
    headers: {
      'locale': locale
    }
  })
  const dataAllSettings = await resAllSettings.json();

  if (slug === 'preliminaries') {
    return {
      redirect: {
        destination: '/sections',
        permanent: true,
      },
    };
  }

  return {
    props: {
      dataSections: data?.data || [],
      dataAllSections: dataAllSections?.data || [],
      dataAllLangs: dataAllLangs?.data,
      dataPreliminaries: dataPreliminaries?.data[0]?.posts || [],
      dataAllSettings: dataAllSettings.data,


    },
  };
}

// export async function getStaticPaths() {
//   const res = await fetch('https://iiacademy.net/api/categories', {
//     headers: {
//       'locale': 'en' // Default locale
//     }
//   });

//   if (!res.ok) {
//     console.error('Failed to fetch sections:', res.statusText);
//     return {
//       paths: [],
//       fallback: 'blocking',
//     };
//   }

//   const contentType = res.headers.get('content-type');
//   if (!contentType || !contentType.includes('application/json')) {
//     console.error('Invalid content type:', contentType);
//     return {
//       paths: [],
//       fallback: 'blocking',
//     };
//   }

//   const data = await res.json();

//   const paths = data.data.map(section => ({
//     params: { slug: section.slug }
//   }));

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// }

