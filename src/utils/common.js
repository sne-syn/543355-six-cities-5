// add leading zero to num < 10
const addLeadingZero = (value) => {
  return (value < 10) ? `0${value}` : value;
};

// capitalize first char only
const capitalizeChar = (str) => {
  if (typeof str !== `string`) {
    return ``;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const updateItemInItemsCollection = (itemsCollection, newItem) => {
  const index = itemsCollection.findIndex((offer) => offer.id === newItem.id);

  if (index === -1) {
    return false;
  }

  const newItemsCollection = [].concat(itemsCollection.slice(0, index), newItem, itemsCollection.slice(index + 1));
  return newItemsCollection;
};

export {
  addLeadingZero,
  capitalizeChar,
  extend,
  updateItemInItemsCollection
};
