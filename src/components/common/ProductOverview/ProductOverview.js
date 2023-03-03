import React from 'react';
import styles from './ProductOverview.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faUpRightAndDownLeftFromCenter,
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faGooglePlus,
  faTwitter,
  faPinterestP,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

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
            <div className={styles.productHeader}>
              <div className={styles.productName}>
                <h5>name of product</h5>
              </div>
              <div className={styles.arrowButtons}>
                <Button className={styles.headerButtonLeft} variant='outline'>
                  <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                </Button>
                <Button className={styles.headerButtonRight} variant='outline'>
                  <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className={styles.reviews}>
              <FontAwesomeIcon className={styles.star} icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className={styles.star} icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className={styles.star} icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className={styles.star} icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className={styles.star} icon={faStar}></FontAwesomeIcon>
              <Link className={styles.reviewLink}>(0 reviews)</Link>
              <div className={styles.verticalLine}>&#124;</div>
              <Link className={styles.reviewLink}>Add Your Review</Link>
            </div>
            <div className={styles.line}></div>
            <div className={styles.prices}>
              <Button className={styles.btnoldprice} variant='small'>
                $350.00
              </Button>
              <Button className={styles.btnprice} noHover variant='small'>
                $250.00
              </Button>
            </div>
            <div className={styles.line}></div>
            <div className={styles.aboutProductButtons}></div>
            <div className={styles.quantity}></div>
            <div className={styles.quickOverview}></div>
            <div className={styles.sorage}></div>
            <div className={styles.socialMedia}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
