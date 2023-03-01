import React from 'react';
import PropTypes from 'prop-types';
import styles from './PopupProduct.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const PopupProduct = ({ closePopup, productBox }) => {
  return (
    <div className={styles.root}>
      <div className={styles.popupWindow}>
        <div className={`${styles.popupContainer}`}>
          <div className={styles.popupClosingBtn}>
            <Button
              className={styles.popupBtn}
              variant='outline'
              onClick={() => closePopup(false)}
            >
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </Button>
          </div>
          <div className={`row ${styles.popupProductReview}`}>
            <div className={`col-5 ${styles.popupPhoto}`}>
              <img className={styles.image} src={productBox.image} alt='furniture' />
            </div>
            <div className={`col-7 ${styles.popupDetails}`}>
              <div className={styles.title}>
                <h5>{productBox.name}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PopupProduct.propTypes = {
  closePopup: PropTypes.bool,
  productBox: PropTypes.object,
};

export default PopupProduct;
