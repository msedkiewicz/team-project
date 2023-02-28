import React from 'react';
import Banner from '../../common/Banner/Banner';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => (
  <div>
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Banner />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
