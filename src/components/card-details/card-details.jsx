import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PremiumMark from '../premium-mark/premium-mark';
import FavoriteButton from '../favorite-button/favorite-button';
import StarBar from '../star-bar/star-bar';
import {AccomodationTypes, ComponentType} from '../../utils/const';

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

const CardDetails = (props) => {
  const {type, offer} = props;
  const imageSize = getImageSize(type);
  return (
    <React.Fragment>
      {offer.isPremium && (<PremiumMark componentName={`place-card`}/>)}
      <div className={`${type}__image-wrapper place-card__image-wrapper`}>
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
    </React.Fragment>
  );
};

CardDetails.propTypes = {
  type: PropTypes.string,
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
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

export default CardDetails;
