import React from 'react';
import styles from './PromotionBox.module.scss';

const PromotionBox = () => {
  return (
    <div className={`container ${styles.root}`}>
      <div className='row'>
        <div className={`col-md-6 mb-4 ${styles.height}`}>
          <div className={`${styles.box} ${styles.first}`}>
            <div className={styles.shadow}>
              <div className={styles.content}>
                <h4>GUEST ROOM</h4>
                <h1>
                  <strong>SOFA</strong>
                </h1>
                <div className={styles.discount}>
                  <h2>- 20%</h2>
                </div>
              </div>
            </div>
            <img
              src='https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            ></img>
          </div>
        </div>
        <div className={`col-md-6 mb-4 ${styles.height}`}>
          <div className={`${styles.box} ${styles.second}`}>
            <div className={styles.content}>
              <h5>
                <strong>OFFICE</strong> CHAIR
              </h5>
              <h6>COLLECTION</h6>
              <h5 className={styles.color}>
                <strong>$200.00</strong>
              </h5>
            </div>
            <img
              src='https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            ></img>
          </div>
          <div className={`${styles.box} ${styles.third}`}>
            <div className={styles.content}>
              <h6>
                <strong className={styles.color}>SPECIAL</strong> COLLECTION
              </h6>
              <p>SAVE UP 40% OF FURNITURE</p>
            </div>
            <img
              src='https://images.pexels.com/photos/3965534/pexels-photo-3965534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBox;
