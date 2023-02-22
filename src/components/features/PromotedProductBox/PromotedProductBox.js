import React from 'react';
import { useSelector } from 'react-redux';
import { getPromotedProduct } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import styles from './PromotedProductBox.module.scss';

const PromotedProductBox = () => {
  const promotedProduct = useSelector(getPromotedProduct);

  return (
    <div className={styles.root}>
      <div className={styles.promotedProductContainer}>
        <div className={styles.photo}>
          <img
            className={styles.image}
            src={promotedProduct.image}
            alt='promotedFurniture'
          />
          <div className={styles.textBar}>
            <p className={styles.title}>
              {promotedProduct.softTitle}
              <strong className={styles.strongTitle}>
                {` ${promotedProduct.strongTitle}`}
              </strong>
            </p>
            <p className={styles.description}>{promotedProduct.description}</p>
          </div>
          <Button className={styles.shopNowButton}>shop now</Button>
        </div>
      </div>
    </div>
  );
};

export default PromotedProductBox;
