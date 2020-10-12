import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {generateOffers} from './mocks/offers.js';
import {generateReviews} from './mocks/reviews.js';
import {generateHost} from './mocks/host.js';

const offers = generateOffers(20);
const reviews = generateReviews(10);
const host = generateHost(10);

ReactDOM.render(
    <App offers={offers} reviews={reviews} host={host} />,
    document.querySelector(`#root`)
);
