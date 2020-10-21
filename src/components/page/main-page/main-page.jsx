import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Page from '../page';
import Header from '../../header/header';
import LocationsNav from '../../locations-nav/locations-nav';
import PlacesContainer from '../../places-container/places-container';
import NoPlacesContainer from '../../no-places-container/no-places-container';
// import {CITIES} from '../../../utils/const';

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentCity: `Amsterdam`,
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
    return (
      <Page pageClass={`page page--gray page--main ${ filteredOffers.length === 0 && `page__main--index-empty`}`}>
        <Header isLogged={isLogged}/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationsNav currentCity={this.state.currentCity} onLocationChange={this._handleLocationChange} />
            </section>
          </div>
          <div className="cities">
            {filteredOffers.length > 0 ? (<PlacesContainer filteredOffers={filteredOffers} currentCity={this.state.currentCity} />) : (<NoPlacesContainer currentCity={this.state.currentCity} />)}
          </div>
        </main>
      </Page>
    );
  }
}

MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default MainPage;
