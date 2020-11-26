import ListHoverOnMap from '../list-hover-on-map/list-hover-on-map';
import MapSection from '../map-section/map-section';
import PropTypes from 'prop-types';
import React from 'react';
import Sort from '../sort/sort';
import {connect} from 'react-redux';
import {getActiveElement, getUnsortedOffers} from '../../store/offers-data/offers-data-selectors';
import {getHighlightedOfferID} from '../../store/active-card/active-card-selectors';

const PlacesContainer = ({unsortedOffers, activeElement, highlightedOfferID}) => {
  const placeText = unsortedOffers.length === 1 ? `place` : `places`;
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{unsortedOffers.length} {placeText} to stay in {activeElement}</b>
        <Sort defaultOnValue={false}/>
        <ListHoverOnMap type={`cities`}/>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <MapSection offersToShowOnMap={unsortedOffers} activeCity={activeElement} activeOffer={Number(highlightedOfferID)}/>
        </section>
      </div>
    </div>
  );
};

PlacesContainer.propTypes = {
  unsortedOffers: PropTypes.array.isRequired,
  activeElement: PropTypes.string.isRequired,
  highlightedOfferID: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    activeElement: getActiveElement(state),
    unsortedOffers: getUnsortedOffers(state),
    highlightedOfferID: getHighlightedOfferID(state),
  };
}

export {PlacesContainer};
export default connect(mapStateToProps)(PlacesContainer);
