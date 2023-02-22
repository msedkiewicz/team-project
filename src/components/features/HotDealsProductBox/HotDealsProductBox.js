import React from 'react';
import PropTypes from 'prop-types';
// import ProductBox from '../../common/ProductBox/ProductBox';
import Button from '../../common/Button/Button';
import styles from './HotDealsProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
import { getHotDeal } from '../../../redux/productsRedux';

const HotDealsProductBox = () => {
  const hotDealsProduct = useSelector(getHotDeal);

  return (
    <div className={styles.root}>
      <div className={styles.hotDealsHeaderContainer}>
        <div className={styles.hotText}>hot deals</div>
        <div className={styles.dotsContainer}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
      <div className={styles.photo}>
        <img className={styles.image} src={hotDealsProduct.image} alt='furniture' />
        <Button className={styles.btnAddToChart} variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
  );
};

HotDealsProductBox.propTypes = {
  hotDealsProduct: PropTypes.object,
};

export default HotDealsProductBox;
