import React from 'react';
import styles from './BlogPostBox.module.scss';

const PostBox = () => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img
          className={styles.image}
          src='./images/furniture_images/bed_images/bed-9.jpg'
          alt='furniture'
        />
        <div className={styles.infoBox}>
          <div className={`row ${styles.infoWrapper}`}>
            <div className={`col-5 ${styles.infoBox}`}>dsgfjh</div>
            <div className={`col-5 ${styles.infoBox}`}>dsgfjh</div>
          </div>
        </div>
      </div>
      <h1>dskglhfglik</h1>
    </div>
  );
};

export default PostBox;
