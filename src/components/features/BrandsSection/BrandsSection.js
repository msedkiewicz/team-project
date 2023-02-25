import React, { useState } from 'react';
import styles from './BrandsSection.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getAllBrands } from '../../../redux/brandsRedux';
import { useSelector } from 'react-redux';

const BrandsSection = () => {
  const allBrands = useSelector(getAllBrands);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row ${styles.brandsSectionRow}`}>
          {/* <h1>dzjghdksjzlgfhgpiosdfjk</h1> */}
          <div className={`col ${styles.sectionElementsWrapper}`}>
            <div className={`col-1 ${styles.buttonWrapper}`}>
              <Button className={`${styles.arrowButton}`} variant='small'>
                <FontAwesomeIcon icon={faAngleLeft}>left</FontAwesomeIcon>
              </Button>
            </div>
            <div className={`col-10 ${styles.brandsWrapper}`}>
              {allBrands.map(item => (
                <div key={item.id} className={`col-2 ${styles.brandImage}`}>
                  <img src={item.image} alt='brand' />
                </div>
              ))}

              {/* <ul>
                {allBrands.map(item => (
                  <li key={item.id}>{item.image}</li>
                ))}
              </ul> */}
            </div>
            <div className='col-1'>
              <Button className={`${styles.arrowButton}`} variant='small'>
                <FontAwesomeIcon icon={faAngleRight}>right</FontAwesomeIcon>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
