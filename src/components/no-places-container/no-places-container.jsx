import PropTypes from 'prop-types';
import React from 'react';

const NoPlacesContainer = ({activeElement}) => {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {activeElement}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
};

NoPlacesContainer.propTypes = {
  activeElement: PropTypes.string.isRequired,
};

export default NoPlacesContainer;
