import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Header from '../header/header';
import LocationsNav from '../locations-nav/locations-nav';
import PlacesContainer from '../places-container/places-container';
import NoPlacesContainer from '../no-places-container/no-places-container';
import {CITIES} from '../../utils/const';
import {changeActiveElement} from '../../store/reducer';

const getPlacesComponent = (offers, currentCity) => {
  switch (true) {
    case (offers.length === 0):
      return <NoPlacesContainer currentCity={currentCity} />;
    default:
      return <PlacesContainer offers={offers} currentCity={currentCity} />;
  }
};

const MainPage = (props) => {
  const {offers, activeElement, changeActiveElement} = props;
  const currentCity = activeElement;
  const filteredOffers = offers.filter((offer) =>
    (offer.city === currentCity)
  );
  let mainClassName = `page__main page__main--index`;
  if (filteredOffers.length === 0) {
    mainClassName += ` page__main--index-empty`;
  }

  return (
    <div className="page page--gray page--main">
      <Header {...props}/>
      <main className={mainClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsNav changeActiveElement={changeActiveElement} currentCity={currentCity} tab={true}/>
          </section>
        </div>
        <div className="cities">
          {getPlacesComponent(filteredOffers, currentCity)}
        </div>
      </main>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeElement: state.activeElement
  };
}

const mapDispatchToProps = {
  changeActiveElement
};

MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
