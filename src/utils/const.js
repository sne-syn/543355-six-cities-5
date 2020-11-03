const CountCards = {
  CITIES_LIST: 4,
  NEAR_LIST: 3
};

const ComponentType = {
  CITIES: `cities`,
  NEAR: `near-places`,
  FAVORITE: `favorites`
};

const SortType = {
  DEFAULT: `Popular`,
  PRICE_LOW_HIGH: `Price: low to high`,
  PRICE_HIGH_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

const AccomodationTypes = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`
};

const MAX_RATING = 5;
const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

export {MAX_RATING, CITIES, MONTH_NAMES, AccomodationTypes, CountCards, ComponentType, SortType};
