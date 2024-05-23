import { useRouter } from "next/router";
import Navbar from "../../../src/components/Navbar";
import styles from "./index.module.scss";
import Link from "next/link";
import Footer from "../../../src/components/Footer";

const Section = ({ dataSections, dataAllSections,
  dataAllLangs,
  dataPreliminaries
}) => {
  const router = useRouter();
  return (
    <>
      <section dir={router.locale === 'ar' ? 'rtl' : 'ltr'} className={styles.div}>
        <div className={styles.child} />
        <div className={styles.item} />
        <div className={styles.inner} />
        <Navbar dataAllSections={dataAllSections} dataPreliminaries={dataPreliminaries} dataAllLangs={dataAllLangs} />


        <div className="container">

          <div className={styles.sec_container}>
            <div className={styles.img_container}>
              <img
                className={styles.rectangleIcon}
                alt={dataSections.name}
                src={dataSections.cover}
              />
            </div>

            <div className={styles.text_container}>
              <div className={styles.frameParent1}>
                <div className={styles.wrapper1}>
                  <b className={styles.b4}>{dataSections.name}</b>
                </div>
                <div className={styles.div3}>
                  {dataSections.seo_description}
                </div>
              </div>
            </div>

          </div>

          <div className={styles.frameParent5}>
            <div className={styles.instanceParent}>
              {dataSections.posts.map((post, idx) =>
                <Link href={`/details/${post.slug}`} keyt={idx} className={styles.rectangleParent}>
                  <img
                    className={styles.instanceChild}
                    alt=""
                    src={post.icon}
                  />
                  <div className={styles.wrapper3}>
                    <b className={styles.b}>{post.title}</b>
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

export default Section;



// pages/sections/[slug].js

// pages/sections/[slug].js

export async function getStaticProps({ params, locale }) {
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



  return {
    props: {
      dataSections: data.data,
      dataAllSections: dataAllSections.data,
      dataAllLangs: dataAllLangs.data,
      dataPreliminaries: dataPreliminaries.data[0].posts,

    },
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://iiacademy.net/api/categories', {
    headers: {
      'locale': 'en' // Default locale
    }
  });

  if (!res.ok) {
    console.error('Failed to fetch sections:', res.statusText);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  const contentType = res.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    console.error('Invalid content type:', contentType);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  const data = await res.json();

  const paths = data.data.map(section => ({
    params: { slug: section.slug }
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

