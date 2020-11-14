export const ActionType = {
  CHANGE_ACTIVE_ELEMENT: `CHANGE_ACTIVE_ELEMENT`,
  SHOW_FAVORITES_ELEMENTS: `SHOW_FAVORITES_ELEMENTS`,
  SHOW_OFFERS_ON_LOAD: `SHOW_OFFERS_ON_LOAD`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  SET_ACTIVE_CARD_ID: `SET_ACTIVE_CARD_ID`,
  RESET_ACTIVE_CARD_ID: `RESET_ACTIVE_CARD_ID`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SHOW_FILTERED_OFFERS: `SHOW_FILTERED_OFFERS`,
};
export const showOnLoad = (offers) => ({
  type: ActionType.SHOW_OFFERS_ON_LOAD,
  payload: offers
});

export const redirectToRoute = (url) => ({
  type: `REDIRECT_TO_ROUTE`,
  payload: url,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const changeActiveElement = (evt) => ({
  type: ActionType.CHANGE_ACTIVE_ELEMENT,
  payload: evt.target.textContent
});

export const showFavoritesElements = (favorites) => ({
  type: ActionType.SHOW_FAVORITES_ELEMENTS,
  payload: favorites
});

export const changeSortType = (evt) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: evt.target.textContent
});

export const setActiveCardID = (evt) => ({
  type: ActionType.SET_ACTIVE_CARD_ID,
  payload: evt.currentTarget.id
});

export const resetActiveCardID = () => ({
  type: ActionType.RESET_ACTIVE_CARD_ID,
});

