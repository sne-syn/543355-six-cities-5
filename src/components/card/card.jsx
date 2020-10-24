import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PremiumMark from '../premium-mark/premium-mark';
import FavoriteButton from '../favorite-button/favorite-button';
import StarBar from '../star-bar/star-bar';
import {CITIES, AccomodationTypes, ComponentType} from '../../utils/const';

const getCardClass = (type) => {
  switch (type) {
    case ComponentType.CITIES:
      return `cities__place-card`;
    case ComponentType.NEAR:
      return `near-places__card`;
    case ComponentType.FAVORITE:
      return `favorites__card`;
  }

  return ``;
};

const getImageSize = (type) => {
  switch (type) {
    case ComponentType.FAVORITE:
      return {
        width: 150,
        height: 110,
      };
    default:
      return {
        width: 260,
        height: 200,
      };
  }
};

const Card = ({cardType, offer}) => {
  const imageSize = getImageSize(cardType);
  return (
    <article id={`${offer.id}`} className={`place-card ${getCardClass(cardType)}`}>
      {offer.isPremium && (<PremiumMark componentName={`place-card`}/>)}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.images[0]} width={imageSize.width} height={imageSize.height} alt="Place image" />
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
        <StarBar rating={offer.rating} />
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{AccomodationTypes[offer.type]}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  cardType: PropTypes.string.isRequired,
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

export default Card;
