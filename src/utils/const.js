const NEAR_PLACES_COUNT = 3;
const ComponentType = {
  CITIES: `cities`,
  NEAR: `near-places`,
  FAVORITE: `favorites`
};

const SortType = new Map();
SortType.set(`DEFAULT`, `Popular`);
SortType.set(`PRICE_LOW_HIGH`, `Price: low to high`);
SortType.set(`PRICE_HIGH_LOW`, `Price: high to low`);
SortType.set(`TOP_RATED`, `Top rated first`);

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

export {NEAR_PLACES_COUNT, MAX_RATING, CITIES, MONTH_NAMES, AccomodationTypes, ComponentType, SortType};
