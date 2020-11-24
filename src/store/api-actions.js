import {loadOfferItem, loadReviews, loadOffers, loadNearPlaces, loadUserInformation, redirectToRoute, requireAuthorization, showFavoritesElements, showOnLoad} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../utils/const';

export const addToFavorites = (id, status) => (_dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
);

export const postReview = (offerId, data) => (dispatch, _getState, api) => {
  const {comment, rating} = data;
  return (
    api.post(`${APIRoute.COMMENTS}/${offerId}`, {comment, rating})
  );
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(loadUserInformation(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => dispatch(showFavoritesElements(data)))
);

export const fetchPropertyPage = (id) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(`${APIRoute.OFFERS}/${id}`).then((offerItem) => dispatch(loadOfferItem(offerItem.data))),
    api.get(`${APIRoute.COMMENTS}/${id}`).then((reviews) => dispatch(loadReviews(reviews.data))),
    api.get(`${APIRoute.OFFERS}/${id}${APIRoute.OFFERS_NEARBY}`).then((nearPlaces) => dispatch(loadNearPlaces(nearPlaces.data)))
  ])
  .then((values) => values)
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then((reviews) => dispatch(loadReviews(reviews.data)))
);

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data)))
    .then(({array}) => dispatch(showOnLoad(array)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);
