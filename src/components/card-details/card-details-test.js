// import React from 'react';
// import renderer from 'react-test-renderer';
// import CardDetails from './card-details';

// jest.mock(`react-router-dom`, () => ({Link: `Link`}));

// const offer =
//   {
//     bedrooms: 1,
//     city: `Paris`,
//     description: `Gran suite con entrada independiente y baño interior privado en el centro de Segovia. Privacidad y comodidad a tan sólo tres minutos del acueducto.Amplia y luminosa, con 2 camas de 105 (+ 1 opcional de 90), baño completo, calefacción, mininevera, microondas, vajilla, cubertería básica, Internet y un balcón grande y soleado.I speak English, Italian and Spanish`,
//     features: [`cabel TV`, `heating`, `kitchen`, `towels`, `washing machine`, `washer`, `dishwasher`, `conditioner`, `elevator`, `coffee machine`],
//     host: {
//       author: `Janette`,
//       avatar: `https://robohash.org/64?set=set2&size=54x54`,
//       date: `2017-06-09T16:12:32.554Z`,
//       id: 3,
//       rating: 2,
//       text: `The flat is on the second floor of a noisy street so the shutters need to be fully closed to block out the noise. Amenities are great and all in all I had a great stay :)`,
//     },
//     id: `_tpc7eyby1`,
//     images: [`https://bit.ly/34LWdhj`, `https://bit.ly/36Ys6Wn`, `https://bit.ly/33Qpecj`, `https://bit.ly/30YVQif`, `https://bit.ly/36TgIv7`, `https://bit.ly/3lEt2DG`],
//     isFavorite: true,
//     isPremium: false,
//     location: [48.83961, 2.342499],
//     maxGuests: 8,
//     price: 207,
//     rating: 1.4018800815887484,
//     title: `La Latina- Small Charming Studio`,
//     type: `room`,
//   };

// it(`CardDetails is rendered correctly`, () => {
//   const tree = renderer.create((
//     <CardDetails
//       offer={offer}
//       type={`cities`}
//     />
//   )).toJSON();

//   expect(tree).toMatchSnapshot();
// });
