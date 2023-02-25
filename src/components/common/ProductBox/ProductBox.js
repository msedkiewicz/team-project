import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCompareProducts,
  toggleCompare,
  toggleFavorite,
} from '../../../redux/productsRedux';
import UserRatingBox from '../../features/UserRatingBox/UserRatingBox';
import PopUpProduct from '../PopUpProduct/PopUpProduct';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  userRating,
  image,
  isFavorite,
  isCompare,
  id,
  oldPrice,
}) => {
  const oldPricing = oldPrice;
  const starsNumber = stars;
  const [favoriteValue, setFavoriteValue] = useState(isFavorite);
  const [compareValue, setCompareValue] = useState(isCompare);
  const productId = id;
  const compareProducts = useSelector(state => getCompareProducts(state));
  const dispatch = useDispatch();
  const toggleFavoriteValue = e => {
    e.preventDefault();
    setFavoriteValue(!isFavorite);
    dispatch(toggleFavorite(productId));
  };

  const toggleCompareValue = e => {
    e.preventDefault();
    setCompareValue(!compareValue);

    const productToCompare = compareProducts.find(p => p.id === id);

    if (productToCompare && productToCompare.isCompare) {
      dispatch(toggleCompare(id));
    } else if (!productToCompare && compareProducts.length < 4) {
      dispatch(toggleCompare(id));
    } else {
      return;
    }
  };

  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);

  if (modal) {
    return <PopUpProduct showModal={modal} closeModal={closeModal} />;
  }

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img className={styles.image} src={image} alt='furniture' />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttonsContainer}>
          <div className={styles.buttons}>
            <Button variant='small' onClick={openModal}>
              Quick View
            </Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
        <UserRatingBox stars={starsNumber} id={productId} userRating={userRating} />
        <div className={styles.line}></div>
        <div className={styles.actions}>
          <div className={styles.outlines}>
            <Button
              variant='outline'
              onClick={e => toggleFavoriteValue(e)}
              className={favoriteValue ? styles.isFavorite : undefined}
            >
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
            <Button
              variant='outline'
              onClick={toggleCompareValue}
              className={isCompare ? styles.isCompare : undefined}
            >
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.price}>
            {oldPricing ? (
              <Button noHover className={styles.btnoldprice} variant='small'>
                $ {oldPrice}
              </Button>
            ) : (
              <></>
            )}
            <Button className={styles.btnprice} noHover variant='small'>
              $ {price}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,

  stars: PropTypes.number,
  image: PropTypes.string,
  isFavorite: PropTypes.bool,
  isCompare: PropTypes.bool,
  id: PropTypes.string,
  userRating: PropTypes.bool,
};

export default ProductBox;
