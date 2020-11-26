import Header from '../header/header';
import Loader from '../loader/loader';
import LocationsNav from '../locations-nav/locations-nav';
import NoPlacesContainer from '../no-places-container/no-places-container';
import PlacesContainer from '../places-container/places-container';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getActiveElement, getOffersLoadingStatus, getUnsortedOffers} from '../../store/offers-data/offers-data-selectors';
import {fetchOffers} from '../../store/api-actions';
import {CITIES} from '../../utils/const';

const getPlacesComponent = (offers, activeElement) => {
  switch (true) {
    case (offers.length === 0):
      return <NoPlacesContainer activeElement={activeElement} />;
    default:
      return <PlacesContainer />;
  }
};

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.offers.length === 0) {
      this.props.fetchOffersAction();
    }
  }

  render() {
    const {activeElement, offers, loading} = this.props;
    let mainClassName = `page__main page__main--index`;
    if (offers.length === 0) {
      mainClassName += ` page__main--index-empty`;
    }

    return (
      <div className="page page--gray page--main">
        <Header {...this.props}/>
        {loading ? (<Loader />) : (
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
          </main>)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeElement: getActiveElement(state),
  loading: getOffersLoadingStatus(state),
  offers: getUnsortedOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOffersAction() {
    dispatch(fetchOffers());
  }
});

MainPage.defaultProps = {
  activeElement: CITIES[0],
  offers: [],
};

MainPage.propTypes = {
  activeElement: PropTypes.string.isRequired,
  fetchOffersAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  offers: PropTypes.array.isRequired,
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
