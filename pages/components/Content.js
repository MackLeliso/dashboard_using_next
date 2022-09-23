import React from 'react'
import styles from '../../styles/Home.module.css'

function Content() {
  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentwrapper}>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <div>Companies</div>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <div>Customer</div>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <div>User</div>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <div>Project</div>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <div>Companies</div>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <div>Companies</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content