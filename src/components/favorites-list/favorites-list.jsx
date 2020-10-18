import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

const FavoritesList = ({favoritesOffersOnly}) => {
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <PlaceCard
            key={favoritesOffersOnly[1].id}
            containerCardClass={`favorites__card`}
            imageCardClass={`favorites__image-wrapper `}
            imgWidth={150}
            imgHeight={110}
            offer={favoritesOffersOnly[1]}
          />
        </div>
      </li>

      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Cologne</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <PlaceCard
            key={favoritesOffersOnly[0].id}
            containerCardClass={`favorites__card`}
            imageCardClass={`favorites__image-wrapper `}
            imgWidth={150}
            imgHeight={110}
            offer={favoritesOffersOnly[0]}
          />
        </div>
      </li>
    </ul>
  );
};

FavoritesList.propTypes = {
  favoritesOffersOnly: PropTypes.array.isRequired
};

export default FavoritesList;
