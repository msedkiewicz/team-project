import React from 'react';
import styles from './PromotedSection.module.scss';
import HotDealsProductBox from '../../features/HotDealsProductBox/HotDealsProductBox';

const PromotedSection = () => {
  return (
    <div className={styles.root}>
      <div className='row'>
        <div className='col-4'>
          <HotDealsProductBox />
        </div>
        <div className='col-8'></div>
      </div>
    </div>
  );
};

export default PromotedSection;
