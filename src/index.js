import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {redirect} from './store/middlewares/redirect';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './store/root-reducer';
import {requireAuthorization} from './store/action';
import {createAPI} from './services/api';
import {generateReviews} from './mocks/reviews';
import {getRandomIntegerNumber} from './utils/common';
import {AuthorizationStatus} from './utils/const';
import {fetchOffers, checkAuth} from './store/api-actions';

const reviews = generateReviews(getRandomIntegerNumber(0, 15));

const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)));

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)), applyMiddleware(redirect)));

Promise.all([
  store.dispatch(fetchOffers()),
  store.dispatch(checkAuth())
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App reviews={reviews} />
      </Provider>,
      document.querySelector(`#root`)
  );
});

