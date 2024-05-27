import React from 'react'
import styles from './index.module.scss';
import DaulArrowsUp from '../../../public/DaulArrowsUp';

const Footer = ({ dataAllSettings }) => {
  console.log(dataAllSettings, "dataAllSettingsFooter")
  return (
    <footer id='footer' className={styles.footer} dir={dataAllSettings.dir}>

      <div className={styles.sec_container}>
        <div className="container">
          <div className={styles.text_container}>
            <div className={styles.title}>
              <h1>{dataAllSettings.site_name} </h1>
            </div>
            <div className={styles.links_list}>
              <div className={styles.link}>
                <a href="#">{dataAllSettings.home}</a>
              </div>
              <div className={styles.link}>
                <a href="/sections">{dataAllSettings.sections}</a>
              </div>
              <div className={styles.link}>
                <a href="/preliminaries">{dataAllSettings.preliminaries}</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom_container}>

          <div className="container">
            <div className={styles.inner_container}>
              <a href='#' className={styles.toTopBottom}>
                <DaulArrowsUp />
              </a>

              <div className={styles.copy}>

                <div dangerouslySetInnerHTML={{ __html: dataAllSettings?.footer_copyright }} />

              </div>


            </div>


          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer