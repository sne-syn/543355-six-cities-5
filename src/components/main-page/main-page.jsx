import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Header from '../header/header';
import LocationsNav from '../locations-nav/locations-nav';
import PlacesContainer from '../places-container/places-container';
import NoPlacesContainer from '../no-places-container/no-places-container';

const getPlacesComponent = (offers, activeElement) => {
  switch (true) {
    case (offers.length === 0):
      return <NoPlacesContainer activeElement={activeElement} />;
    default:
      return <PlacesContainer />;
  }
};

const MainPage = (props) => {
  const {activeElement, offers} = props;
  let mainClassName = `page__main page__main--index`;
  if (offers.length === 0) {
    mainClassName += ` page__main--index-empty`;
  }

  return (
    <div className="page page--gray page--main">
      <Header {...props}/>
      <main className={mainClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsNav tab={true}/>
          </section>
        </div>
        <div className="cities">
          {getPlacesComponent(offers, activeElement)}
        </div>
      </main>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeElement: state.activeElement,
    offers: state.unsortedOffers
  };
}

MainPage.propTypes = {
  activeElement: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired
};

export {MainPage};
export default React.memo(connect(mapStateToProps)(MainPage));
