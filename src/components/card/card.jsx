import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FavoriteButton from '../favorite-button/favorite-button';
import StarBar from '../star-bar/star-bar';
import {CITIES, AccomodationTypes} from '../../utils/const';

const getImageSize = (type) => {
  return (type === `favorites`) ? {
    width: 150,
    height: 110,
  } :
    {
      width: 260,
      height: 200,
    };
};

const Card = ({type, offer, setCardMarkerHover, resetCardMarkerHover}) => {
  const {cardType, containerClass} = type;
  const imageSize = getImageSize(cardType);
  return (
    <article id={`${offer.id}`} className={`place-card ${containerClass}`} onMouseEnter={setCardMarkerHover} onMouseLeave={ resetCardMarkerHover}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

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
          <Link to="/offer/5">{offer.title}</Link>
        </h2>
        <p className="place-card__type">{AccomodationTypes[offer.type]}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  type: PropTypes.shape({
    cardType: PropTypes.string.isRequired,
    containerClass: PropTypes.string.isRequired,
    size: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    })
  }).isRequired,
  setCardMarkerHover: PropTypes.func,
  resetCardMarkerHover: PropTypes.func,
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
