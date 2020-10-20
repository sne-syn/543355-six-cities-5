import React from 'react';
import PropTypes from 'prop-types';
import ListNearPlaces from '../list-near-places/list-near-places';
import {CountCards} from '../../utils/const';

const NearPlaces = ({offers}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <ListNearPlaces listClass={`near-places__list places__list`} offers={offers} countCards={CountCards.NEAR_LIST} >
      </ListNearPlaces>
    </section>
  );
};

NearPlaces.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default NearPlaces;
