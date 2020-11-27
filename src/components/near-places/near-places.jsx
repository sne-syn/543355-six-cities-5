import List from '../list/list';
import PropTypes from 'prop-types';
import React from 'react';
const COUNT_NEAR_PLACES = 3;
const NEAR_PLACES_LIST_TYPE = `near-places`;

const NearPlaces = ({offers}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <List type={NEAR_PLACES_LIST_TYPE} offers={offers.slice(0, COUNT_NEAR_PLACES)} />
    </section>
  );
};

NearPlaces.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default NearPlaces;
