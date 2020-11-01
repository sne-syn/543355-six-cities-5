export const ActionType = {
  SHOW_ON_LOAD: `SHOW_ON_LOAD`,
  CHANGE_ACTIVE_ELEMENT: `CHANGE_ACTIVE_ELEMENT`,
  SHOW_FAVORITES: `SHOW_FAVORITES`
};

export const ActionCreator = {
  showOnLoad: () => ({
    type: ActionType.SHOW_ON_LOAD
  }),
  changeActiveElement: (evt) => ({
    type: ActionType.CHANGE_ACTIVE_ELEMENT,
    payload: evt.target.textContent
  }),
  showFavoritesElement: () => ({
    type: ActionType.SHOW_FAVORITES
  })
};
