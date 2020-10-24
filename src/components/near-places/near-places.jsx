import React from 'react';
import PropTypes from 'prop-types';
import List from '../list/list';

const NearPlaces = ({offers}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <List type={`near-places`} offers={offers} />
    </section>
  );
};

NearPlaces.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default NearPlaces;
