import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../../store/action";
import FavoritesCardsList from '../favorites-cards-list/favorites-cards-list';
import LocationsItem from '../../locations-item/locations-item';

const FavoritesList = ({favoritesOffers, changeLocation}) => {
  let collectCititesWithFavorites = new Set();
  for (let value of favoritesOffers) {
    collectCititesWithFavorites.add(value.city);
  }
  let citiesWithFavoritesOffers = Array.from(collectCititesWithFavorites);

  return (
    <ul className="favorites__list">
      {citiesWithFavoritesOffers.map((city, i) => {
        return (
          <li key={`city-${i}`} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <LocationsItem cityName={city} onClick={changeLocation}/>
              </div>
            </div>
            <FavoritesCardsList city={city} offers={favoritesOffers}/>
          </li>
        );
      })
      }
    </ul>
  );
};

FavoritesList.propTypes = {
  favoritesOffers: PropTypes.array.isRequired,
  activeElement: PropTypes.string.isRequired,
  changeLocation: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    favoritesOffers: state.filteredOffers,
    activeElement: state.activeElement,
  };
}

const mapDispatchToProps = (dispatch) => ({
  showFavoritesElements() {
    dispatch(ActionCreator.showFavoritesElements());
  },
  changeLocation(evt) {
    dispatch(ActionCreator.changeActiveElement(evt));
  }
});

export {FavoritesList};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
