import { useRouter } from "next/router";
import Footer from "../../../src/components/Footer";
import Navbar from "../../../src/components/Navbar";
import styles from "./index.module.scss";
import Link from "next/link";

const Section = ({ dataAllSections }) => {
  const router = useRouter();

  console.log(dataAllSections, "dataAllSections")
  return (
    <>
      <section dir={router.locale === 'ar' ? 'rtl' : 'ltr'} className={styles.div}>
        <div className={styles.child} />
        <div className={styles.item} />
        <div className={styles.inner} />
        <Navbar />


        <div className="container">

          <div className={styles.sec_container}>
            <div className={styles.img_container}>
              <img
                className={styles.rectangleIcon}
                alt={dataAllSections.name}
                src={dataAllSections.cover}
              />
            </div>

            <div className={styles.text_container}>
              <div className={styles.frameParent1}>
                <div className={styles.wrapper1}>
                  <b className={styles.b4}>{dataAllSections.name}</b>
                </div>
                <div className={styles.div3}>
                  {dataAllSections.seo_description}
                </div>
              </div>
            </div>

          </div>

          <div className={styles.frameParent5}>
            <div className={styles.instanceParent}>
              {dataAllSections.posts.map((post, idx) =>
                <Link href={`/details/${post.slug}`} keyt={idx} className={styles.rectangleParent}>
                  <img
                    className={styles.instanceChild}
                    alt=""
                    src="/rectangle-22541@2x.png"
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

  if (!res.ok) {
    console.error('Failed to fetch section:', res.statusText);
    return {
      notFound: true,
    };
  }

  const contentType = res.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    console.error('Invalid content type:', contentType);
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  return {
    props: {
      dataAllSections: data.data
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

