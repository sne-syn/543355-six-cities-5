import {SortType} from './utils/const';

export const filterData = (dataCollection, payload) => {
  return dataCollection.filter((it) =>
    (it.city.name === payload));
};

export const getSortedMovies = (filteredOffers, unsortedOffers, sortType) => {
  let sortedOffers = [];
  switch (sortType) {
    case SortType.get(`PRICE_LOW_HIGH`):
      sortedOffers = [...filteredOffers].sort((a, b) => a.price - b.price);
      break;
    case SortType.get(`PRICE_HIGH_LOW`):
      sortedOffers = [...filteredOffers].sort((a, b) => b.price - a.price);
      break;
    case SortType.get(`TOP_RATED`):
      sortedOffers = [...filteredOffers].sort((a, b) => b.rating - a.rating);
      break;
    case SortType.get(`DEFAULT`):
      sortedOffers = [...unsortedOffers];
      break;
  }

  return sortedOffers;
};
