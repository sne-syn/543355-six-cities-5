export const ActionType = {
  CHANGE_ACTIVE_ELEMENT: `CHANGE_ACTIVE_ELEMENT`,
  SHOW_FAVORITES: `SHOW_FAVORITES`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  SET_ACTIVE_CARD_ID: `SET_ACTIVE_CARD_ID`,
  RESET_ACTIVE_CARD_ID: `RESET_ACTIVE_CARD_ID`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
};

export const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  changeActiveElement: (evt) => ({
    type: ActionType.CHANGE_ACTIVE_ELEMENT,
    payload: evt.target.textContent
  }),
  showFavoritesElements: () => ({
    type: ActionType.SHOW_FAVORITES
  }),
  changeSortType: (evt) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: evt.target.textContent
  }),
  setActiveCardID: (evt) => ({
    type: ActionType.SET_ACTIVE_CARD_ID,
    payload: evt.currentTarget.id
  }),
  resetActiveCardID: () => ({
    type: ActionType.RESET_ACTIVE_CARD_ID,
  })
};
