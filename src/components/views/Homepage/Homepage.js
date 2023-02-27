import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromotionBox from '../../features/PromotionBox/PromotionBox';
import PromotedSection from '../../layout/PromotedSection/PromotedSection';

const Homepage = () => (
  <div className={styles.root}>
    <PromotedSection />
    <FeatureBoxes />
    <PromotionBox />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
