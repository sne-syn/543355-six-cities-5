import FavoriteButton from '../favorite-button/favorite-button';
import PremiumMark from '../premium-mark/premium-mark';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import StarBar from '../star-bar/star-bar';
import {AccomodationTypes, ComponentType} from '../../utils/const';
import {Link} from 'react-router-dom';
import withMouthEvent from '../../HOCs/with-mouth-event/with-mouth-event';

const getCardClass = (type) => {
  let className;
  switch (type) {
    case ComponentType.CITIES:
      className = `cities__place-card`;
      return className;
    case ComponentType.NEAR:
      className = `near-places__card`;
      return className;
    case ComponentType.FAVORITE:
      className = `favorites__card`;
      return className;
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

class Card extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {type, offer} = this.props;
    const imageSize = getImageSize(type);
    return (
      <article key={`${offer.id}`} className={`${getCardClass(type) } place-card`}>
        {offer.isPremium && (<PremiumMark componentName={`place-card`}/>)}
        <div className={`${type}__image-wrapper place-card__image-wrapper`}>
          <Link to={`/hotels/${offer.id}`}>
            <img className="place-card__image" src={offer.previewImage} width={imageSize.width} height={imageSize.height} alt="Place image" />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <FavoriteButton defaultOnValue={offer.isFavorite} componentName={`place-card`} offerId={offer.id}/>
          </div>
          <StarBar rating={offer.rating} />
          <h2 className="place-card__name">
            <Link to={`/hotels/${offer.id}`}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{AccomodationTypes[offer.type]}</p>
        </div>
      </article>
    );
  }
}

Card.defaultProps = {
  type: `cities`
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    goods: PropTypes.array.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    host: PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired
    }).isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
};

const CardWithHoverEvent = withMouthEvent(Card);
export {CardWithHoverEvent};
export default Card;
