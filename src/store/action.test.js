import {
  getDataForPropertyPage,
  changeActiveElement,
  changeSortType,
  loadNearPlaces,
  loadOfferItem,
  loadOffers,
  loadReviews,
  loadUserInformation,
  redirectToRoute,
  requireAuthorization,
  resetActiveCardId,
  setActiveCardId,
  setReviewComment,
  setReviewRating,
  setUserInformation,
  showFavoritesElements,
  showOnLoad,
  updateFavoritesInStore,
  updateNearPlacesInStore,
  updateOfferItemInStore,
  updateOffersInStore,
  updateReviewsInStore,
  ActionType
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for getting dara forPropertyPage returns correct action`, () => {
    expect(getDataForPropertyPage([])).toEqual({
      type: ActionType.GET_DATA_FOR_PROPERTY_PAGE,
      payload: []
    });
  });
  it(`Action creator for changeActiveElement returns correct action`, () => {
    expect(changeActiveElement(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_ACTIVE_ELEMENT,
      payload: `Amsterdam`
    });
  });
  it(`Action creator for changeSortType returns correct action`, () => {
    expect(changeSortType(`popular`)).toEqual({
      type: ActionType.CHANGE_SORT_TYPE,
      payload: `popular`
    });
  });
  it(`Action creator for loadNearPlaces returns correct action`, () => {
    expect(loadNearPlaces([])).toEqual({
      type: ActionType.LOAD_NEAR_PLACES,
      payload: []
    });
  });
  it(`Action creator for loadOfferItem returns correct action`, () => {
    expect(loadOfferItem({})).toEqual({
      type: ActionType.LOAD_OFFER_ITEM,
      payload: {}
    });
  });
  it(`Action creator for loadOffers returns correct action`, () => {
    expect(loadOffers([])).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: []
    });
  });
  it(`Action creator for loadReviews returns correct action`, () => {
    expect(loadReviews([])).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: []
    });
  });
  it(`Action creator for loadUserInformation returns correct action`, () => {
    expect(loadUserInformation({})).toEqual({
      type: ActionType.LOAD_USER_INFORMATION,
      payload: {}
    });
  });
  it(`Action creator for redirectToRoute returns correct action`, () => {
    expect(redirectToRoute(`/login`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/login`
    });
  });
  it(`Action creator for requireAuthorization returns correct action`, () => {
    expect(requireAuthorization(`AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`
    });
  });
  it(`Action creator for resetActiveCardId returns correct action`, () => {
    expect(resetActiveCardId()).toEqual({
      type: ActionType.RESET_ACTIVE_CARD_ID,
    });
  });
  it(`Action creator for setActiveCardId returns correct action`, () => {
    expect(setActiveCardId(2)).toEqual({
      type: ActionType.SET_ACTIVE_CARD_ID,
      payload: 2
    });
  });
  it(`Action creator for setReviewComment returns correct action`, () => {
    expect(setReviewComment(`Hello there! I'm your comment.`)).toEqual({
      type: ActionType.SET_REVIEW_COMMENT,
      payload: `Hello there! I'm your comment.`
    });
  });
  it(`Action creator for setReviewRating returns correct action`, () => {
    expect(setReviewRating(5)).toEqual({
      type: ActionType.SET_REVIEW_RATING,
      payload: 5
    });
  });
  it(`Action creator for setUserInformation returns correct action`, () => {
    expect(setUserInformation(`trust_no_1@gmail.com`)).toEqual({
      type: ActionType.SET_USER_INFORMATION,
      payload: `trust_no_1@gmail.com`
    });
  });
  it(`Action creator for showFavoritesElements returns correct action`, () => {
    expect(showFavoritesElements([])).toEqual({
      type: ActionType.SHOW_FAVORITES_ELEMENTS,
      payload: []
    });
  });
  it(`Action creator for showOnLoad returns correct action`, () => {
    expect(showOnLoad()).toEqual({
      type: ActionType.SHOW_OFFERS_ON_LOAD,
    });
  });
  it(`Action creator for updateFavoritesInStore returns correct action`, () => {
    expect(updateFavoritesInStore([])).toEqual({
      type: ActionType.UPDATE_FAVORITES,
      payload: []
    });
  });
  it(`Action creator for updateNearPlacesInStore returns correct action`, () => {
    expect(updateNearPlacesInStore({})).toEqual({
      type: ActionType.UPDATE_NEAR_PLACES,
      payload: {}
    });
  });
  it(`Action creator for updateOfferItemInStore returns correct action`, () => {
    expect(updateOfferItemInStore({})).toEqual({
      type: ActionType.UPDATE_OFFER_ITEM,
      payload: {}
    });
  });
  it(`Action creator for updateOffersInStore returns correct action`, () => {
    expect(updateOffersInStore({})).toEqual({
      type: ActionType.UPDATE_OFFERS,
      payload: {}
    });
  });
  it(`Action creator for updateReviewsInStore returns correct action`, () => {
    expect(updateReviewsInStore({})).toEqual({
      type: ActionType.UPDATE_REVIEWS,
      payload: {}
    });
  });
});
