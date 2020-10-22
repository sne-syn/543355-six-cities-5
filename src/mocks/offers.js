import {
  getRandomIntegerNumber,
  getRandomArrayItem,
  getRandomNumber,
  getSeveralRandomItems,
  generateID
} from '../utils/common.js';
import {CITIES} from '../utils/const.js';


const generateRandomAmountOfRandomNumbers = () => {
  let uniqueSet = new Set();
  for (let i = 0; i < getRandomIntegerNumber(1, 6); i++) {
    uniqueSet.add(getRandomIntegerNumber(0, 10));
  }
  return uniqueSet;
};

const getShuffledArray = (arr) => {
  let newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.round(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

const Photos = [`https://bit.ly/30YVQif`, `https://bit.ly/36TgIv7`, `https://bit.ly/36Ys6Wn`, `https://bit.ly/3lEt2DG`, `https://bit.ly/33Qpecj`, `https://bit.ly/34LWdhj`];

const Features = [`dishwasher`, `parking`, `washer`, `elevator`, `conditioner`, `Wi-Fi`, `washing machine`, `towels`, `heating`, `coffee machine`, `baby seat`, `kitchen`, `cabel TV`, `fridge`];
const AccomodationTypes = [`apartment`, `room`, `house`, `hotel`];
const Titles = [`Refurbished apartment close to Sacré Coeur 4P`, `Estudio junto a la Plaza Mayor`, `La Latina- Small Charming Studio`, `Estudio/suite completo en el centro de Segovia`, `Music Apartment. With pool`];
const Descriptions = [`Small and charming 25 m2 studio located in an old building of XIX century. Is located on the ground floor inside of a typical Corrala Madrileña.
Small but well equipped with everything you need for a short stay in Madrid.
Walking distance to: Plaza Mayor, Sol, El Rastro, Royal Palace, San Miguel Market, Plaza de la Cebadal, Gran Vía, Cava Baja street and Lavapiés neighborhood, a lot of shops, bars and restaurants of all kinds.`, `Auténtica casa mallorquina de cerca 100 años de antigüedad y bien conservada. Ubicada en una finca que ofrece tranquilidad y privacidad total, a la vez que muy bien comunicada con los principales puntos de interés turístico, como son las playas de Puerto de Pollença, la increíble Cala San Vicente, el pintoresco pueblo de Pollença...
En su estancia podrá disfrutar del gran jardín y piscina, además de sus acogedoras estancias.`, `Gran suite con entrada independiente y baño interior privado en el centro de Segovia. Privacidad y comodidad a tan sólo tres minutos del acueducto.Amplia y luminosa, con 2 camas de 105 (+ 1 opcional de 90), baño completo, calefacción, mininevera, microondas, vajilla, cubertería básica, Internet y un balcón grande y soleado.I speak English, Italian and Spanish`, `Places of interest: Cuenca Alta del Manzanares Natural Park, Cerro de San Pedro. My accommodation is good for couples, adventurers, business travelers.It is a very quiet and silent individual apartment. In wild nature. Free parking at the door. The apartment has a garden area that can be used by the different guests. The wi-fi also covers the whole garden.`, `In full nature and very close to public transport. Green area surrounded by all kinds of sports facilities including a golf course, paddle, artificial grass soccer, pelota court. In an urbanization of villas with landscaped plots of about 500 m2`];

const Location = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198],
  [52.4006614685059, 4.88902187347412],
  [52.3763414, 4.8999733],
  [52.333889, 4.888803]
];


const generateOffer = () => {
  return {
    id: generateID(),
    city: CITIES[3],
    title: getRandomArrayItem(Titles),
    images: getShuffledArray(Photos),
    price: getRandomIntegerNumber(50, 250),
    type: getRandomArrayItem(AccomodationTypes),
    rating: getRandomNumber(1, 5),
    features: getSeveralRandomItems(Features, getRandomIntegerNumber(5, Features.length)),
    bedrooms: getRandomIntegerNumber(1, 5),
    maxGuests: getRandomIntegerNumber(1, 10),
    description: getRandomArrayItem(Descriptions),
    reviews: Array.from(generateRandomAmountOfRandomNumbers()),
    isPremium: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
    host: `id-${getRandomIntegerNumber(0, 5)}`,
    location: getRandomArrayItem(Location)
  };
};

const generateOffers = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateOffer);
};

export {
  generateOffers
};
