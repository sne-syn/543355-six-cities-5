import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../../store/action";
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritesMainEmpty from '../favorites-main-empty/favorites-main-empty';
import FavoritesMainOffers from '../favorites-main-offers/favorites-main-offers';

const getFavoriteComponent = (offers) => {
  if (offers.length === 0) {
    return <FavoritesMainEmpty />;
  } else {
    return <FavoritesMainOffers offers={offers} />;
  }
};

class FavoritesPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showFavoritesElements(this.props.offers);
  }

  render() {
    const {offers} = this.props;
    let favoritesClassName = `page__main page__main--favorites`;
    if (offers.length === 0) {
      favoritesClassName += `page__main--favorites-empty`;
    }
    return (
      <div className="page">
        <Header {...this.props}/>
        <main className={favoritesClassName} >
          {getFavoriteComponent(offers)}
        </main>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    offers: state.filteredOffers
  };
}

const mapDispatchToProps = (dispatch) => ({
  showFavoritesElements(offers) {
    dispatch(ActionCreator.showFavoritesElements(offers));
  }
});

FavoritesPage.propTypes = {
  offers: PropTypes.array.isRequired,
  showFavoritesElements: PropTypes.func.isRequired
};

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
