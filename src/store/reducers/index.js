import {activeCard} from './active-card';
import {offersData} from './offers-data';
import {userData} from './user-data';
import {combineReducers} from 'redux';

export const NameSpace = {
  OFFERS: `OFFERS`,
  ACTIVE_CARD: `ACTIVE_CARD`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.OFFERS]: offersData,
  [NameSpace.ACTIVE_CARD]: activeCard,
  [NameSpace.USER]: userData,
});


