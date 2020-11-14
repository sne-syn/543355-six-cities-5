import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getActiveElement, getUnsortedOffers} from '../../store/offers-data/offers-data-selectors';
import {getHighlightedOfferID} from '../../store/active-card/active-card-selectors';
import Sort from '../sort/sort';
import MapSection from '../map-section/map-section';
import ListHoverOnMap from '../list-hover-on-map/list-hover-on-map';

const PlacesContainer = ({unsortedOffers, activeElement, highlightedOfferID}) => {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{unsortedOffers.length} {unsortedOffers.length === 1 ? `place` : `places`} to stay in {activeElement}</b>
        <Sort defaultOnValue={false}/>
        <ListHoverOnMap type={`cities`}/>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <MapSection offersToShowOnMap={unsortedOffers} activeCity={activeElement} activeOffer={highlightedOfferID}/>
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
