import {activeCard} from './active-card/active-card-reducer';
import {favorites} from './favorites/favorites-reducers';
import {offerItem} from './offer-item/offer-item-reducers';
import {offersData} from './offers-data/offers-data-reducers';
import {userData} from './user-data/user-data-reducers';
import {combineReducers} from 'redux';

export const NameSpace = {
  ACTIVE_CARD: `ACTIVE_CARD`,
  FAVORITES: `FAVORITES`,
  OFFERS: `OFFERS`,
  OFFER_ITEM: `OFFER_ITEM`,
  USER: `USER`,
};

export const rootReducer = combineReducers({
  [NameSpace.ACTIVE_CARD]: activeCard,
  [NameSpace.FAVORITES]: favorites,
  [NameSpace.OFFERS]: offersData,
  [NameSpace.OFFER_ITEM]: offerItem,
  [NameSpace.USER]: userData,
});
