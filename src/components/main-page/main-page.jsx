import Header from '../header/header';
import LocationsNav from '../locations-nav/locations-nav';
import NoPlacesContainer from '../no-places-container/no-places-container';
import PlacesContainer from '../places-container/places-container';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getActiveElement, getLoadingStatus, getUnsortedOffers} from '../../store/offers-data/offers-data-selectors';
import {fetchOffers} from '../../store/api-actions';
import {showOnLoad} from '../../store/action';

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
    this.props.fetchOffersAction();
  }

  render() {
    const {activeElement, offers, loading} = this.props;
    let mainClassName = `page__main page__main--index`;
    if (offers.length === 0) {
      mainClassName += ` page__main--index-empty`;
    }

    if (loading) {
      return <div>Загрузка</div>;
    }

    return (
      <div className="page page--gray page--main">
        <Header {...this.props}/>
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
  }
}

function mapStateToProps(state) {
  return {
    activeElement: getActiveElement(state),
    offers: getUnsortedOffers(state),
    loading: getLoadingStatus(state),
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchOffersAction() {
    dispatch(fetchOffers());
  }
});

MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
  activeElement: PropTypes.string.isRequired
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
