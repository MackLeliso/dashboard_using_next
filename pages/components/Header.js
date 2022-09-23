import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from '../../images/avator.png';
function Header() {
  return (
    <div className={styles.headercontainer}>
      <div className={styles.headerwrapper}>
        <div className={styles.title}>
          <h2>
            Hello <span>next</span>
          </h2>
          <p>well come</p>  
        </div>
      </div>
      <div className={styles.profile}>
        <img src = 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png' alt ='profile' className={styles.image}/>
      </div>
    </div>
  )
}

export default Header