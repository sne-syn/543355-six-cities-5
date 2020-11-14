import {activeCard} from './active-card/active-card-reducer';
import {offersData} from './offers-data/offers-data-reducers';
import {userData} from './user-data/user-data-reducers';
import {combineReducers} from 'redux';

export const NameSpace = {
  OFFERS: `OFFERS`,
  ACTIVE_CARD: `ACTIVE_CARD`,
  USER: `USER`
};

export const rootReducer = combineReducers({
  [NameSpace.OFFERS]: offersData,
  [NameSpace.ACTIVE_CARD]: activeCard,
  [NameSpace.USER]: userData,
});


