import React from 'react';
import renderer from 'react-test-renderer';
import CardDetails from './card-details';
import {ComponentType} from '../../utils/const';
import {MemoryRouter} from 'react-router-dom';

jest.mock(`../favorite-button/favorite-button`, () => `FavoriteButton`);
jest.mock(`../premium-mark/premium-mark`, () => `PremiumMark`);
jest.mock(`../star-bar/star-bar`, () => `StarBar`);

const noop = () => {};
const offer = {
  bedrooms: 1,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: `Amsterdam`,
  },
  description: `Gran suite con entrada independiente y baño interior privado en el centro de Segovia. Privacidad y comodidad a tan sólo tres minutos del acueducto.Amplia y luminosa, con 2 camas de 105 (+ 1 opcional de 90), baño completo, calefacción, mininevera, microondas, vajilla, cubertería básica, Internet y un balcón grande y soleado.I speak English, Italian and Spanish`,
  goods: [`cabel TV`, `heating`, `kitchen`, `towels`, `washing machine`, `washer`, `dishwasher`, `conditioner`, `elevator`, `coffee machine`],
  host: {
    avatar: `https://robohash.org/28?set=set2&size=74x74`,
    id: 4,
    isPro: false,
    name: `Salom`,
  },
  id: 1,
  previewImage: `https://bit.ly/34LWdhj`,
  images: [`https://bit.ly/34LWdhj`, `https://bit.ly/36Ys6Wn`, `https://bit.ly/33Qpecj`, `https://bit.ly/30YVQif`, `https://bit.ly/36TgIv7`, `https://bit.ly/3lEt2DG`],
  isFavorite: true,
  isPremium: false,
  location: [48.83961, 2.342499],
  maxGuests: 8,
  price: 207,
  rating: 1.4018800815887484,
  title: `La Latina- Small Charming Studio`,
  type: `room`,
};

const offerWithPremiumMark = {
  bedrooms: 1,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: `Amsterdam`,
  },
  description: `Gran suite con entrada independiente y baño interior privado en el centro de Segovia. Privacidad y comodidad a tan sólo tres minutos del acueducto.Amplia y luminosa, con 2 camas de 105 (+ 1 opcional de 90), baño completo, calefacción, mininevera, microondas, vajilla, cubertería básica, Internet y un balcón grande y soleado.I speak English, Italian and Spanish`,
  goods: [`cabel TV`, `heating`, `kitchen`, `towels`, `washing machine`, `washer`, `dishwasher`, `conditioner`, `elevator`, `coffee machine`],
  host: {
    avatar: `https://robohash.org/28?set=set2&size=74x74`,
    id: 4,
    isPro: false,
    name: `Salom`,
  },
  id: 1,
  previewImage: `https://bit.ly/34LWdhj`,
  images: [`https://bit.ly/34LWdhj`, `https://bit.ly/36Ys6Wn`, `https://bit.ly/33Qpecj`, `https://bit.ly/30YVQif`, `https://bit.ly/36TgIv7`, `https://bit.ly/3lEt2DG`],
  isFavorite: true,
  isPremium: true,
  location: [48.83961, 2.342499],
  maxGuests: 8,
  price: 207,
  rating: 1.4018800815887484,
  title: `La Latina- Small Charming Studio`,
  type: `room`,
};

describe(`<CardDetails /> test`, () => {
  it(`renders CardDetails for cities list`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <CardDetails
            offer={offer}
            type={ComponentType.CITIES}
            highlightedOfferID={`0`}
            resetActiveCardIdAction={noop}
            setActiveCardIdAction={noop}>
            <React.Fragment />
          </CardDetails>
        </MemoryRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders CardDetails for favorites list`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <CardDetails
            offer={offer}
            type={ComponentType.FAVORITE}/>
        </MemoryRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders CardDetails for near-places list`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <CardDetails
            offer={offer}
            type={ComponentType.NEAR}/>
        </MemoryRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders CardDetails with Premium-mark`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <CardDetails
            offer={offerWithPremiumMark}
            type={ComponentType.NEAR}/>
        </MemoryRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

