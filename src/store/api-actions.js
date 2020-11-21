import {loadOfferItem, loadReviews, loadOffers, loadNearPlaces, loadUserInformation, redirectToRoute, requireAuthorization, showFavoritesElements, showOnLoad} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../utils/const';

export const postReview = (offerId, data) => (dispatch, _getState, api) => {
  const {comment, rating} = data;
  return (
    api.post(`/comments/${offerId}`, {comment, rating})
    .then(() => api.get(`/comments/${offerId}`))
    .then((response) => dispatch(loadReviews(response.data)))
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
    api.get(`/hotels/${id}`).then((offerItem) => dispatch(loadOfferItem(offerItem.data))),
    api.get(`/comments/${id}`).then((reviews) => dispatch(loadReviews(reviews.data))),
    api.get(`/hotels/${id}/nearby`).then((nearPlaces) => dispatch(loadNearPlaces(nearPlaces.data)))
  ])
  .then((values) => values)
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
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
