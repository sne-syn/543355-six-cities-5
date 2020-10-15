import React from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from '../favorite-button/favorite-button';
import {CITIES} from '../../utils/const';
import {AccomodationTypes} from '../../utils/common';

const PlaceCard = ({containerCardClass, imageCardClass, offer, onCardHover, onCardClick}) => {
  return (
    <article key={`${offer.id}`} className={`place-card ${containerCardClass}`} onMouseEnter={onCardHover}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${imageCardClass} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton isFavorite={offer.isFavorite} componentName={`place-card`} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${100 / 5 * offer.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={onCardClick}>{offer.title}</a>
        </h2>
        <p className="place-card__type">{AccomodationTypes[offer.type]}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  containerCardClass: PropTypes.string.isRequired,
  imageCardClass: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    city: PropTypes.oneOf([...CITIES]).isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    reviews: PropTypes.array.isRequired,
    host: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PlaceCard;
