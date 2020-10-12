import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Locations from '../locations/locations';
import PlacesList from '../places-list/places-list';

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCity: `Paris`,
    };
  }

  render() {
    const {offers} = this.props;
    const filteredOffers = offers.filter((offer) =>
      (offer.city === this.state.activeCity)
    );
    return (
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <Locations activeCity={`Paris`}/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} {filteredOffers.length === 1 ? `place` : `places`} to stay in {this.state.activeCity}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
            Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  {/* <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>*/}
                </form>
                <PlacesList offers={filteredOffers} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default MainPage;
