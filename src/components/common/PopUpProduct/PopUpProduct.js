import React from 'react';
import PropTypes from 'prop-types';
import styles from './PopupProduct.module.scss';

const PopupProduct = ({ closePopup }) => {
  return (
    <div className={styles.root}>
      <div className={styles.popupContainer}>
        <button onClick={() => closePopup(false)}> X </button>
        <div className={styles.title}>
          <h1>hfaldsuifhd</h1>
        </div>
        <div className={styles.body}></div>
        <div className={styles.footer}></div>
      </div>
    </div>
  );
};

PopupProduct.propTypes = {
  closePopup: PropTypes.bool,
};

export default PopupProduct;
