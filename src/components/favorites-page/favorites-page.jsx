import FavoritesMainEmpty from '../favorites-main-empty/favorites-main-empty';
import FavoritesMainOffers from '../favorites-main-offers/favorites-main-offers';
import Footer from '../footer/footer';
import Header from '../header/header';
import Loader from '../loader/loader';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {fetchFavorites} from '../../store/api-actions';
import {getFavorites, getFavoritesLoadingStatus} from '../../store/favorites/favorites-selectors';

const getFavoriteComponent = (favorites) => {
  if (favorites.length === 0) {
    return <FavoritesMainEmpty />;
  } else {
    return <FavoritesMainOffers favorites={favorites}/>;
  }
};

class FavoritesPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showFavoritesElementsAction();
  }

  render() {
    const {favorites, loading} = this.props;
    let favoritesClassName = `page__main page__main--favorites`;
    if (favorites.length === 0) {
      favoritesClassName += `page__main--favorites-empty`;
    }

    return (
      <div className="page">
        <Header {...this.props}/>
        {loading ? (<Loader />) : (
          <>
        <main className={favoritesClassName} >
          {getFavoriteComponent(favorites)}
        </main>
        <Footer />
        </>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
  loading: getFavoritesLoadingStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  showFavoritesElementsAction() {
    dispatch(fetchFavorites());
  }
});

FavoritesPage.propTypes = {
  favorites: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  showFavoritesElementsAction: PropTypes.func.isRequired,
};

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
