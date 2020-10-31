import {CITIES} from '../utils/const';
import {extend} from '../utils/common';
import {createStore} from "redux";

const initialState = {
  activeElement: CITIES[0]
};

export const changeActiveElement = (evt) => {
  return {
    type: `CHANGE_ACTIVE_ELEMENT`,
    playload: evt.target.textContent
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_ACTIVE_ELEMENT`:
      return extend(state, {
        activeElement: action.playload
      });
    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
export default store;
