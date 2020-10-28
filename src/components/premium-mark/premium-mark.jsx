import React from 'react';
import PropTypes from 'prop-types';

const PremiumMark = ({componentName}) => {
  return (
    <div className={`${componentName}__mark`}>
      <span>Premium</span>
    </div>
  );
};

PremiumMark.propTypes = {
  componentName: PropTypes.string.isRequired
};

export default PremiumMark;
