import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute} from "../utils/const";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const fetchReviews = () => (dispatch, _getState, api) => (
  api.get(`/comments/:hotel_id`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);
export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`/comments/:hotel_id`)
    .then(({data}) => dispatch(ActionCreator.loadFavorites(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);
