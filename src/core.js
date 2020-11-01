export const filterData = (dataCollection, payload) => {
  return dataCollection.filter((it) =>
    (it.city === payload));
};

export const filterFavorites = (dataCollection) => {
  return dataCollection.filter((it) =>
    (it.isFavorite === true));
};
