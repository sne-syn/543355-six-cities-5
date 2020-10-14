import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {generateOffers} from './mocks/offers.js';
import {generateReviews} from './mocks/reviews.js';
import {generateHost} from './mocks/host.js';
import {getRandomIntegerNumber} from './utils/common.js';

const isLogged = Math.random() > 0.5;
const offers = generateOffers(20);
const reviews = generateReviews(getRandomIntegerNumber(0, 15));
const host = generateHost(10);
ReactDOM.render(
    <App offers={offers} reviews={reviews} host={host} isLogged={isLogged} />,
    document.querySelector(`#root`)
);
