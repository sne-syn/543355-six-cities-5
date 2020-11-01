export const ActionType = {
  SHOW_ON_LOAD: `SHOW_ON_LOAD`,
  CHANGE_ACTIVE_ELEMENT: `CHANGE_ACTIVE_ELEMENT`,
};

export const ActionCreator = {
  showOnLoad: (allOffers) => ({
    type: ActionType.SHOW_ON_LOAD,
    payload: allOffers
  }),
  changeActiveElement: (evt) => ({
    type: ActionType.CHANGE_ACTIVE_ELEMENT,
    payload: evt.target.textContent
  })
};
