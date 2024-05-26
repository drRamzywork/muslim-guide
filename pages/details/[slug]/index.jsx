import { useEffect, useState } from "react";
import Footer from "../../../src/components/Footer";
import styles from "./index.module.scss";

const Details = ({ sectionData, dataAllSections, }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    if (sectionData) {
      setContent(sectionData.body);
    }
  }, [sectionData]);

  useEffect(() => {
    const handler = (e) => {
      if (e.target.closest(".tox-tinymce-aux, .moxman-window, .tam-assetmanager-root") !== null) {
        e.stopImmediatePropagation();
      }
    };
    document.addEventListener("focusin", handler);
    return () => document.removeEventListener("focusin", handler);
  }, []);


  const renderChildrenContent = (children) => {
    return children?.map((child, index) => (
      child.body ? (
        <>
          <h2 className="text-3xl w-full font-extrabold leading-[50px] text-gray-50 bg-main-color p-4  lg:text-3xl dark:text-white custom-border-radius">
            {child.title} :- </h2>
          <div key={index} className={styles.childContent} dangerouslySetInnerHTML={{ __html: child.body }} />
        </>

      ) : null
    ));
  };

  return (
    <>





      <div className={styles.div} dir="rtl">
        <div className={styles.header}>
          <div className={styles.child} />
          <div className={styles.wrapper2}>
            <b className={styles.b4}>{sectionData?.title}</b>
          </div>

        </div>



        <div className={styles.frameParent4}>
          <div className="container">
            <div className={styles.frameParent5}>
              {renderChildrenContent(sectionData.children)}

              {content && <div dangerouslySetInnerHTML={{ __html: content }} />}

            </div>


          </div>

        </div>

      </div>


      <Footer />
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: dataAllSections?.body }} />
      </div>

    </>

  );
};

export default Details;

export async function getServerSideProps({ params, locale }) {
  const { slug } = params;

  const res = await fetch(`https://iiacademy.net/api/post/${slug}`, {
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
      dataAllSections: dataAllSections?.data || [],
      sectionData: data?.data || [],
      dataAllLangs: dataAllLangs?.data || [],
      dataPreliminaries: dataPreliminaries?.data[0]?.posts || [],

    },
  };
}
