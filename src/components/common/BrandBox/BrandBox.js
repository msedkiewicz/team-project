import React from 'react';
import PropTypes from 'prop-types';
import styles from './BrandBox.module.scss';

const BrandBox = ({ image }) => {
  return (
    <div className={styles.root}>
      <div className={styles.logoBox}>
        <img className={styles.brandLogo} src={image} alt='brand logo' />
      </div>
    </div>
  );
};
BrandBox.propTypes = {
  image: PropTypes.string,
};

export default BrandBox;
