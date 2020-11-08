import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./store/reducer";

import {generateReviews} from './mocks/reviews.js';
import {getRandomIntegerNumber} from './utils/common.js';

const isLogged = Math.random() > 0.5;

const reviews = generateReviews(getRandomIntegerNumber(0, 15));

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

ReactDOM.render(
    <Provider store={store}>
      <App reviews={reviews} isLogged={isLogged} />
    </Provider>,
    document.querySelector(`#root`)
);
