import React from 'react';
import PropTypes from 'prop-types';

const MapSection = ({sectionName}) => {
  return (
    <section className={`${sectionName}__map map`}></section>
  );
};

MapSection.propTypes = {
  sectionName: PropTypes.string.isRequired
};

export default MapSection;
