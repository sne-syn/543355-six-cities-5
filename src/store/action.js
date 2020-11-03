export const ActionType = {
  CHANGE_ACTIVE_ELEMENT: `CHANGE_ACTIVE_ELEMENT`,
  SHOW_FAVORITES: `SHOW_FAVORITES`,
};

export const ActionCreator = {
  changeActiveElement: (evt) => ({
    type: ActionType.CHANGE_ACTIVE_ELEMENT,
    payload: evt.target.textContent
  }),
  showFavoritesElements: () => ({
    type: ActionType.SHOW_FAVORITES
  }),
};
