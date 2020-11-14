import {requireAuthorization, redirectToRoute, showFavoritesElements, loadOffers, loadReviews} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../utils/const';

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => dispatch(showFavoritesElements(data)))
);

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data)))
);

export const fetchReviews = () => (dispatch, _getState, api) => (
  api.get(`/comments/:hotel_id`)
    .then(({data}) => dispatch(loadReviews(data)))
);
