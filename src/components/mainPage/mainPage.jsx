import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import LocationsNav from '../locations-nav/locations-nav';
import PlacesContainer from '../places-container/places-container';
import NoPlacesContainer from '../no-places-container/no-places-container';
import {CITIES} from '../../utils/const';

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCity: CITIES[0],
    };
  }

  render() {
    const {offers, isLogged, onCardClick} = this.props;
    const filteredOffers = offers.filter((offer) =>
      (offer.city === this.state.activeCity)
    );
    return (
      <div className={`page page--gray page--main ${ filteredOffers.length === 0 && `page__main--index-empty`}`}>
        <Header isLogged={isLogged}/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationsNav activeCity={this.state.activeCity} onLocationChange={(evt) => this.setState({activeCity: evt.target.textContent})} />
            </section>
          </div>
          <div className="cities">
            {filteredOffers.length > 0 ? (<PlacesContainer filteredOffers={filteredOffers} activeCity={this.state.activeCity} onCardClick={onCardClick}/>) : (<NoPlacesContainer activeCity={this.state.activeCity} />)}
          </div>
        </main>
      </div>
    );
  }
}

MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default MainPage;
