import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import LocationsNav from '../../locations-nav/locations-nav';
import PlacesContainer from '../../places-container/places-container';
import NoPlacesContainer from '../../no-places-container/no-places-container';
import {CITIES} from '../../../utils/const';

const getPlacesComponent = (offers, currentCity) => {
  switch (true) {
    case (offers.length === 0):
      return <NoPlacesContainer currentCity={currentCity} />;
    default:
      return <PlacesContainer offers={offers} currentCity={currentCity} />;
  }
};

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentCity: CITIES[3],
    };
    this._handleLocationChange = this._handleLocationChange.bind(this);
  }

  _handleLocationChange(evt) {
    this.setState({
      currentCity: evt.target.textContent
    });
  }

  render() {
    const {offers, isLogged} = this.props;
    const filteredOffers = offers.filter((offer) =>
      (offer.city === this.state.currentCity)
    );
    let mainClassName = `page__main page__main--index`;
    if (filteredOffers.length === 0) {
      mainClassName += ` page__main--index-empty`;
    }

    return (
      <div className="page page--gray page--main">
        <Header isLogged={isLogged}/>
        <main className={mainClassName}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationsNav currentCity={this.state.currentCity} onLocationChange={this._handleLocationChange} />
            </section>
          </div>
          <div className="cities">
            {getPlacesComponent(filteredOffers, this.state.currentCity)}
          </div>
        </main>
      </div>
    );
  }
}

MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default MainPage;
