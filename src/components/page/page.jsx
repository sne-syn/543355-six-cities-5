import React from 'react';
import PropTypes from 'prop-types';

const Page = ({pageClass, children}) => {
  return (
    <div className={`${pageClass}`}>
      {children}
    </div>
  );
};

Page.propTypes = {
  pageClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Page;
