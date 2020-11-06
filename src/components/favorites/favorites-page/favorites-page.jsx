import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../../store/action";
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritesMainEmpty from '../favorites-main-empty/favorites-main-empty';
import FavoritesMainOffers from '../favorites-main-offers/favorites-main-offers';

const getFavoriteComponent = (favoritesOffers) => {
  if (favoritesOffers.length === 0) {
    return <FavoritesMainEmpty />;
  } else {
    return <FavoritesMainOffers favoritesOffers={favoritesOffers}/>;
  }
};

class FavoritesPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showFavoritesElements();
  }

  render() {
    const {favoritesOffers} = this.props;
    let favoritesClassName = `page__main page__main--favorites`;
    if (favoritesOffers.length === 0) {
      favoritesClassName += `page__main--favorites-empty`;
    }
    return (
      <div className="page">
        <Header {...this.props}/>
        <main className={favoritesClassName} >
          {getFavoriteComponent(favoritesOffers)}
        </main>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoritesOffers: state.filteredOffers,
  };
}

const mapDispatchToProps = (dispatch) => ({
  showFavoritesElements() {
    dispatch(ActionCreator.showFavoritesElements());
  }
});

FavoritesPage.propTypes = {
  favoritesOffers: PropTypes.array.isRequired,
  showFavoritesElements: PropTypes.func.isRequired,
};

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
