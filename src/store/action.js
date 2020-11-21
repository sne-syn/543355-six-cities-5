export const ActionType = {
  CHANGE_ACTIVE_ELEMENT: `CHANGE_ACTIVE_ELEMENT`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  GET_DATA_FOR_PROPERTY_PAGE: `GET_DATA_FOR_PROPERTY_PAGE`,
  LOAD_NEAR_PLACES: `LOAD_NEAR_PLACES`,
  LOAD_OFFER_ITEM: `LOAD_OFFER_ITEM`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_USER_INFORMATION: `LOAD_USER_INFORMATION`,
  POST_REVIEW: `POST_REVIEW`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  RESET_ACTIVE_CARD_ID: `RESET_ACTIVE_CARD_ID`,
  SET_ACTIVE_CARD_ID: `SET_ACTIVE_CARD_ID`,
  SHOW_FAVORITES_ELEMENTS: `SHOW_FAVORITES_ELEMENTS`,
  SHOW_OFFERS_ON_LOAD: `SHOW_OFFERS_ON_LOAD`
};

export const getDataForPropertyPage = (data) => ({
  type: ActionType.GET_DATA_FOR_PROPERTY_PAGE,
  payload: data
});

export const changeActiveElement = (evt) => ({
  type: ActionType.CHANGE_ACTIVE_ELEMENT,
  payload: evt.target.textContent
});

export const changeSortType = (evt) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: evt.target.textContent
});

export const loadNearPlaces = (nearPlaces) => ({
  type: ActionType.LOAD_NEAR_PLACES,
  payload: nearPlaces
});

export const loadOfferItem = (offerItem) => ({
  type: ActionType.LOAD_OFFER_ITEM,
  payload: offerItem,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews
});

export const loadUserInformation = (info) => ({
  type: ActionType.LOAD_USER_INFORMATION,
  payload: info
});

export const redirectToRoute = (url) => ({
  type: `REDIRECT_TO_ROUTE`,
  payload: url,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const resetActiveCardID = () => ({
  type: ActionType.RESET_ACTIVE_CARD_ID,
});

export const setActiveCardID = (evt) => ({
  type: ActionType.SET_ACTIVE_CARD_ID,
  payload: evt.currentTarget.id
});

export const showFavoritesElements = (favorites) => ({
  type: ActionType.SHOW_FAVORITES_ELEMENTS,
  payload: favorites
});

export const showOnLoad = (offers) => ({
  type: ActionType.SHOW_OFFERS_ON_LOAD,
  payload: offers
});
