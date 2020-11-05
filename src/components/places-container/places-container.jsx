import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Sort from '../sort/sort';
import MapSection from '../map-section/map-section';
import ListHoverOnMap from '../list-hover-on-map/list-hover-on-map';

const PlacesContainer = ({offers, activeElement}) => {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} {offers.length === 1 ? `place` : `places`} to stay in {activeElement}</b>
        <Sort />
        <ListHoverOnMap type={`cities`}/>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <MapSection/>
        </section>
      </div>
    </div>
  );
};

PlacesContainer.propTypes = {
  offers: PropTypes.array.isRequired,
  activeElement: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    activeElement: state.activeElement,
    offers: state.unsortedOffers
  };
}

export {PlacesContainer};
export default connect(mapStateToProps)(PlacesContainer);
