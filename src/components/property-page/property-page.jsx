import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import FavoriteButton from '../favorite-button/favorite-button';
import Host from '../host/host';
import MapSection from '../map-section/map-section';
import PlacesList from '../places-list/places-list';
import ReviewsList from '../reviews-list/reviews-list';
import {CITIES} from '../../utils/const';
import {AccomodationTypes, capitalizeChar} from '../../utils/common';
const NEAR_PLACE_CARD_COUNT = 3;

const PropertyPage = ({offers, offer, reviews, hosts, isLogged, onCardClick}) => {
  return (
    <div className="page">
      <Header isLogged={isLogged}/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.slice(0, 6).map((img, i) => (
                <div key={i} className="property__image-wrapper">
                  <img className="property__image" src={img} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <FavoriteButton isFavorite={offer.isFavorite} componentName={`property`} />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${100 / 5 * offer.rating}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating.toFixed(1)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {AccomodationTypes[offer.type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                Max {offer.maxGuests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="property__inside-item">
                      {capitalizeChar(feature)}
                    </li>
                  ))}
                </ul>
              </div>

              <Host description={offer.description} hostID={offer.host} hosts={hosts}/>
              <ReviewsList reviews={reviews} isLogged={isLogged}/>

            </div>
          </div>
          <MapSection sectionName={`property`}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <PlacesList cardListClass={`near-places__list`} containerCardClass={`near-places__card`} imageCardClass={`near-places__image-wrapper`} offers={offers} onCardClick={onCardClick} cardsCount={NEAR_PLACE_CARD_COUNT}/>

          </section>
        </div>
      </main>
    </div>
  );
};

PropertyPage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  offers: PropTypes.array.isRequired,
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
  hosts: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default PropertyPage;
