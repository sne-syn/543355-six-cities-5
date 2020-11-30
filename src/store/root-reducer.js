import {activeCard} from './active-card/active-card-reducers';
import {favorites} from './favorites/favorites-reducers';
import {nearPlaces} from './near-places/near-places-reducers';
import {offerItem} from './offer-item/offer-item-reducers';
import {offersData} from './offers-data/offers-data-reducers';
import {userData} from './user-data/user-data-reducers';
import {reviews} from './reviews/reviews-reducers';
import {combineReducers} from 'redux';

export const NameSpace = {
  ACTIVE_CARD: `ACTIVE_CARD`,
  FAVORITES: `FAVORITES`,
  NEAR_PLACES: `NEAR_PLACES`,
  OFFERS: `OFFERS`,
  OFFER_ITEM: `OFFER_ITEM`,
  REVIEWS: `REVIEWS`,
  USER: `USER`,
};

export const rootReducer = combineReducers({
  [NameSpace.ACTIVE_CARD]: activeCard,
  [NameSpace.FAVORITES]: favorites,
  [NameSpace.NEAR_PLACES]: nearPlaces,
  [NameSpace.OFFERS]: offersData,
  [NameSpace.OFFER_ITEM]: offerItem,
  [NameSpace.REVIEWS]: reviews,
  [NameSpace.USER]: userData,
});
