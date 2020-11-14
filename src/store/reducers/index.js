import activeCardReducer from './active-card-reducer';
import loadingOfferReducer from './loading-offer-reducer';
import loadingOffersReducer from './loading-offers-reducer';
import loadingFavoritesReducer from './loading-favorites-reducer';
import loadingReviewsReducer from './loading-reviews-reducer';
import offersReducer from './filter-sort-reducer';
import userReducer from './user-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers(
    {
      offer: loadingOfferReducer,
      offers: loadingOffersReducer,
      activeElement: offersReducer,
      activeSortType: offersReducer,
      highlightedOfferID: activeCardReducer,
      authorizationStatus: userReducer,
      favoritesOffers: loadingFavoritesReducer,
      reviews: loadingReviewsReducer,
      filteredOffers: offersReducer,
      unsortedOffers: offersReducer
    }
);
export {rootReducer};
