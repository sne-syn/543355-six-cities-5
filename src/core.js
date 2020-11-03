import {SortType} from './utils/const';

export const filterData = (dataCollection, payload) => {
  return dataCollection.filter((it) =>
    (it.city === payload));
};

export const filterFavorites = (dataCollection) => {
  return dataCollection.filter((it) =>
    (it.isFavorite === true));
};

export const getSortedMovies = (filteredOffers, unsortedOffers, sortType) => {
  let sortedOffers = [];
  switch (sortType) {
    case SortType.PRICE_LOW_HIGH:
      sortedOffers = [...filteredOffers].sort((a, b) => a.price - b.price);
      break;
    case SortType.PRICE_HIGH_LOW:
      sortedOffers = [...filteredOffers].sort((a, b) => b.price - a.price);
      break;
    case SortType.TOP_RATED:
      sortedOffers = [...filteredOffers].sort((a, b) => b.rating - a.rating);
      break;
    case SortType.DEFAULT:
      sortedOffers = [...unsortedOffers];
      break;
  }

  return sortedOffers.slice(0, 4);
};
