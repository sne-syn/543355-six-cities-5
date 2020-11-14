import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {showOnLoad} from '../../store/action';
import {getActiveElement, getUnsortedOffers} from '../../store/offers-data/offers-data-selectors';
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

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showOnLoadAction(this.props.offers);
  }

  render() {
    const {activeElement, offers} = this.props;
    let mainClassName = `page__main page__main--index`;
    if (offers.length === 0) {
      mainClassName += ` page__main--index-empty`;
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
    offers: getUnsortedOffers(state)
  };
}

const mapDispatchToProps = (dispatch) => ({
  showOnLoadAction(offers) {
    dispatch(showOnLoad(offers));
  }
});

MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
  activeElement: PropTypes.string.isRequired,
  showOnLoadAction: PropTypes.func.isRequired
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
