import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {generateOffers} from './mocks/offers.js';
import {generateReviews} from './mocks/reviews.js';
import {generateHosts} from './mocks/hosts';
import {getRandomIntegerNumber} from './utils/common.js';

const isLogged = Math.random() > 0.5;
const offers = generateOffers(20);
const reviews = generateReviews(getRandomIntegerNumber(0, 15));
const hosts = generateHosts(10);

ReactDOM.render(
    <App offers={offers} reviews={reviews} hosts={hosts} isLogged={isLogged} />,
    document.querySelector(`#root`)
);
