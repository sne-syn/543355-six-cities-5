import React from 'react';
import renderer from 'react-test-renderer';
import {PropertyPage} from './property-page';

const noop = () => {};
jest.mock(`../favorite-button/favorite-button`, () => `FavoriteButton`);
jest.mock(`../header/header`, () => `Header`);
jest.mock(`../host/host`, () => `Host`);
jest.mock(`../loader/loader`, () => `Loader`);
jest.mock(`../map-section/map-section`, () => `MapSection`);
jest.mock(`../near-places/near-places`, () => `NearPlaces`);
jest.mock(`../premium-mark/premium-mark`, () => `PremiumMark`);
jest.mock(`../property-features/property-features`, () => `PropertyFeatures`);
jest.mock(`../reviews-list/reviews-list`, () => `ReviewsList`);
jest.mock(`../star-bar/star-bar`, () => `StarBar`);

const offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: `Amsterdam`,
  },
  description: `In full nature and very close to public transport. Green area surrounded by all kinds of sports facilities including a golf course, paddle, artificial grass soccer, pelota court. In an urbanization of villas with landscaped plots of about 500 m2`,
  goods: [`elevator`, `dishwasher`, `coffee machine`, `washer`, `washing machine`],
  host: {
    avatar: `https://robohash.org/82?set=set2&size=74x74`,
    id: 6,
    isPro: true,
    name: `Whitney`,
  },
  id: 2,
  previewImage: `https://bit.ly/34LWdhj`,
  images: [`https://bit.ly/30YVQif`, `https://bit.ly/3lEt2DG`, `https://bit.ly/36TgIv7`, `https://bit.ly/33Qpecj`, `https://bit.ly/36Ys6Wn`, `https://bit.ly/34LWdhj`],
  isFavorite: false,
  isPremium: false,
  location: [48.865610000000004, 2.350499],
  maxGuests: 5,
  price: 194,
  rating: 1.9069547983791004,
  reviews: [4, 2, 6],
  title: `Estudio/suite completo en el centro de Segovia`,
  type: `house`,
};

const offerPremium = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: `Amsterdam`,
  },
  description: `Gran suite con entrada independiente y baño interior privado en el centro de Segovia. Privacidad y comodidad a tan sólo tres minutos del acueducto.Amplia y luminosa, con 2 camas de 105 (+ 1 opcional de 90), baño completo, calefacción, mininevera, microondas, vajilla, cubertería básica, Internet y un balcón grande y soleado.I speak English, Italian and Spanish`,
  goods: [`parking`, `elevator`, `baby seat`, `cabel TV`],
  host: {
    avatar: `https://robohash.org/66?set=set2&size=74x74`,
    id: 2,
    isPro: true,
    name: `Marquis`,
  },
  id: 2,
  previewImage: `https://bit.ly/34LWdhj`,
  images: [`https://bit.ly/30YVQif`, `https://bit.ly/3lEt2DG`, `https://bit.ly/36TgIv7`, `https://bit.ly/33Qpecj`, `https://bit.ly/36Ys6Wn`, `https://bit.ly/34LWdhj`],
  isFavorite: false,
  isPremium: true,
  location: [48.865610000000004, 2.350499],
  maxGuests: 5,
  price: 194,
  rating: 1.9069547983791004,
  reviews: [4, 2, 6],
  title: `La Latina - Small Charming Studio`,
  type: `room`,
};

describe(`<PropertyPage /> test`, () => {
  it(`renders PropertyPage with loader`, () => {
    const tree = renderer
    .create(
        <PropertyPage
          authorizationStatus={`AUTH`}
          fetchPropertyPageAction={noop}
          id={`24`}
          loading={true}
          nearPlaces={[]}
          offer={{}}
          reviews={[]}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders PropertyPage with fetched data`, () => {
    const tree = renderer
    .create(
        <PropertyPage
          authorizationStatus={`AUTH`}
          fetchPropertyPageAction={noop}
          id={`24`}
          loading={false}
          nearPlaces={[]}
          offer={offer}
          reviews={[]}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders PropertyPage with fetched data and Premium mark`, () => {
    const tree = renderer
    .create(
        <PropertyPage
          authorizationStatus={`AUTH`}
          fetchPropertyPageAction={noop}
          id={`24`}
          loading={false}
          nearPlaces={[]}
          offer={offerPremium}
          reviews={[]}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
