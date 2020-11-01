export const filterData = (dataCollection, payload) => {
  return dataCollection.filter((it) =>
    (it.city === payload));
};
