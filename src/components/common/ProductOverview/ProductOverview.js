import React from 'react';
import styles from './ProductOverview.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faUpRightAndDownLeftFromCenter,
} from '@fortawesome/free-solid-svg-icons';

const ProductOverview = () => {
  return (
    <div className={styles.root}>
      <div className={styles.greyBg}></div>
      <div className='container'>
        <div className={styles.productOverviewContainer}>
          <div className={`col-5`}>
            <div className={styles.photosContainer}>
              <div className={styles.mainPhoto}>
                <img
                  src='/images/furniture_images/bed_images/bed-2.jpg'
                  alt='mebelek'
                />
                <Button className={styles.buttonZoom} variant='outline'>
                  <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                </Button>
              </div>
              <div className={styles.bottomImagesContainer}>
                <div className={styles.smallImages}>
                  <div className={styles.smallImage}>
                    <img
                      src='/images/furniture_images/bed_images/bed-3.jpg'
                      alt='mebelek'
                    />
                  </div>
                  <div className={styles.smallImage}>
                    <img
                      src='/images/furniture_images/bed_images/bed-3.jpg'
                      alt='mebelek'
                    />
                  </div>
                  <div className={styles.smallImage}>
                    <img
                      src='/images/furniture_images/bed_images/bed-3.jpg'
                      alt='mebelek'
                    />
                  </div>
                  <div className={styles.smallImage}>
                    <img
                      src='/images/furniture_images/bed_images/bed-3.jpg'
                      alt='mebelek'
                    />
                  </div>
                </div>
                <div className={styles.buttonsLeftRight}>
                  <Button className={styles.buttonLeft} variant='outline'>
                    <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                  </Button>
                  <Button className={styles.buttonRight} variant='outline'>
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-7`}>
            <h5>name of product</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
