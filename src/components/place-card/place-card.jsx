import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CITIES} from '../../utils/const';

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {offer} = this.props;
    return (
      <article key={`${offer.id}`} className="cities__place-card place-card">
        {offer.isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}

        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offer.images} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button ${offer.isFavorite && (`place-card__bookmark-button--active`)} button`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{`${offer.isFavorite ? (`In`) : (`To`)} bookmarks`}</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${100 / 5 * Math.floor(offer.rating)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{offer.title}</a>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    city: PropTypes.oneOf([...CITIES]).isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
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
