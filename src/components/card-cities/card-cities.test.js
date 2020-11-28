import React from 'react';
import renderer from 'react-test-renderer';
import CardCities from './card-cities';
import {ComponentType} from '../../utils/const';

jest.mock(`../card-details/card-details`, () => `CardDetails`);

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
  location: {latitude: 48.865610000000004,
    longitude: 2.350499,
    zoom: 5},
  maxGuests: 8,
  price: 207,
  rating: 1.4018800815887484,
  title: `La Latina- Small Charming Studio`,
  type: `room`,
};

it(`renders CardCities for cities list`, () => {
  const tree = renderer
    .create(
        <CardCities
          offer={offer}
          type={ComponentType.CITIES}
          highlightedOfferID={`0`}
          resetActiveCardIdAction={noop}
          setActiveCardIdAction={noop}>
          <React.Fragment />
        </CardCities>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
