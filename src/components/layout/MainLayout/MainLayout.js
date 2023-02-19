import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { setViewport } from '../../../redux/viewportRedux';

const MainLayout = ({ children }) => {
  useEffect(() => {
    const handleViewport = () => {
      if (window.innerWidth <= 390) {
        setViewport('mobile');
      }
      if (window.innerWidth <= 820) {
        setViewport('tablet');
      }
      if (window.innerWidth > 820) {
        setViewport('mobile');
      }
    };
    window.addEventListener('resize', handleViewport);

    return () => {
      window.removeEventListener('resize', handleViewport);
    };
  });

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
