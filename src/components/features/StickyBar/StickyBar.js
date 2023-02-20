import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { getCompareProducts } from '../../../redux/productsRedux';
import styles from './StickyBar.module.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const StickyBar = () => {
  const compareProducts = useSelector(state => getCompareProducts(state));

  const removeProduct = id => {
    console.log('removeIMG');
  };

  return (
    <div className={styles.sticky_bar}>
      {compareProducts.map(product => (
        <div key={product.id} className={styles.product_col}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.product_image}
            onClick={() => removeProduct(product.id)}
          />
          <div
            className={styles.product_close}
            onClick={() => removeProduct(product.id)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      ))}
      <div className={styles.product_col}>COMPARE</div>
    </div>
  );
};

export default StickyBar;
