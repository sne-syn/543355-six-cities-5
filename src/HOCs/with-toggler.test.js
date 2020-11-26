import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import withToggler from './with-toggler';

const offers = [
  {
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
  },
  {
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
  },
];

const noop = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withToggler(MockComponent);

it(`withToggler is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      authorizationStatus={`AUTH`}
      comnponentName={`place-card`}
      on={false}
      offerId={1}
      offers={offers}
      onFavoriteButtonClickAction={noop}
      redirectToLoginAction={noop}
      updateOffersInStoreAction={noop}
      toggleComponent={noop}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
