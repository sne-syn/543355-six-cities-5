import FavoriteButton from '../favorite-button/favorite-button';
import Header from '../header/header';
import Host from '../host/host';
import MapSection from '../map-section/map-section';
import PremiumMark from '../premium-mark/premium-mark';
import PropTypes from 'prop-types';
import PropertyFeatures from '../property-features/property-features';
import React from 'react';
import StarBar from '../star-bar/star-bar';
import {capitalizeChar} from '../../utils/common';
import {connect} from 'react-redux';
import {getOffers} from '../../store/offers-data/offers-data-selectors';
// import {getOfferItemId} from '../../store/offers-data/offer-item-selectors';

const COUNT_OFFER_IMAGES = 6;

const PropertyPage = (props) => {
  const {offers, offer} = props;
  console.log(offer);
  return (
    <div className="page">
      <Header {...props}/>
      <main className="page__main page__main--property">

      </main>
    </div>
  );
};

PropertyPage.propTypes = {
  offers: PropTypes.array.isRequired,
  offer: PropTypes.any
};

const mapStateToProps = (state, ownProps) => ({
  offers: getOffers(state),
  offer: getOffers(state).find((it) => it.id === +ownProps.id)
});

export {PropertyPage};
export default connect(mapStateToProps)(PropertyPage);
