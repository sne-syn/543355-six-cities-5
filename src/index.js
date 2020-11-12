import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './store/reducer';
import {ActionCreator} from './store/action';
import {createAPI} from './services/api';
import {generateReviews} from './mocks/reviews';
import {getRandomIntegerNumber} from './utils/common';
import {AuthorizationStatus} from './utils/const';
import {fetchOffers, checkAuth} from './store/api-actions';

const isLogged = Math.random() > 0.5;
const reviews = generateReviews(getRandomIntegerNumber(0, 15));

const api = createAPI(() => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)));

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(api)));
store.dispatch(fetchOffers());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App reviews={reviews} isLogged={isLogged} />
    </Provider>,
    document.querySelector(`#root`)
);
