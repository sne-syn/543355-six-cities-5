export const AccomodationTypes = {
  apartment: `Apartment`,
  house: `House`,
  hotel: `Hotel`,
  room: `Private Room`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  FAVORITES: `/favorite`,
  LOGIN: `/login`,
  OFFER: `/offer/`,
  ROOT: `/`,
};

export const APIRoute = {
  COMMENTS: `/comments/:hotel_id`,
  FAVORITES: `/favorite`,
  LOGIN: `/login`,
  OFFER: `/hotels/:id`,
  OFFERS: `/hotels`,
  OFFERS_NEARBY: `/hotels/:hotel_id/nearby`,
};

export const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const ComponentType = {
  CITIES: `cities`,
  FAVORITE: `favorites`,
  NEAR: `near-places`,
};

export const NEAR_PLACES_COUNT = 3;

export const MAX_RATING = 5;

export const MONTH_NAMES = [
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

export const SortType = new Map();
SortType.set(`DEFAULT`, `Popular`);
SortType.set(`PRICE_LOW_HIGH`, `Price: low to high`);
SortType.set(`PRICE_HIGH_LOW`, `Price: high to low`);
SortType.set(`TOP_RATED`, `Top rated first`);
