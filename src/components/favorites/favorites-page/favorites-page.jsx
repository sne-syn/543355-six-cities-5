import FavoritesMainEmpty from '../favorites-main-empty/favorites-main-empty';
import FavoritesMainOffers from '../favorites-main-offers/favorites-main-offers';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {fetchFavorites} from '../../../store/api-actions';
import {getFavorites} from '../../../store/favorites/favorites-selectors';

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
    const {favorites} = this.props;
    let favoritesClassName = `page__main page__main--favorites`;
    if (favorites.length === 0) {
      favoritesClassName += `page__main--favorites-empty`;
    }
    return (
      <div className="page">
        <Header {...this.props}/>
        <main className={favoritesClassName} >
          {getFavoriteComponent(favorites)}
        </main>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorites: getFavorites(state),
  };
}

const mapDispatchToProps = (dispatch) => ({
  showFavoritesElementsAction() {
    dispatch(fetchFavorites());
  }
});

FavoritesPage.propTypes = {
  favorites: PropTypes.array.isRequired,
  showFavoritesElementsAction: PropTypes.func.isRequired,
};

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
