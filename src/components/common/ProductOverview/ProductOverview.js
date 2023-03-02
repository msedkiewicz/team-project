import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductOverview.module.scss';

const ProductOverview = ({ product }) => {
  console.log('product', product);

  return (
    <div className={styles.root}>
      <div>
        <h1>{product.name}</h1>
      </div>
    </div>
  );
};

ProductOverview.propTypes = {
  product: PropTypes.object,
};

export default ProductOverview;
