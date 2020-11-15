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

const generateID = function () {
  return `_${Math.random().toString(36).substr(2, 9)}`;
};

// get 1 random item from arrayOfItems
const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};
// generate randome integer
const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

// generate random non-integer
const getRandomNumber = (min, max) => {
  return min + (Math.random() * (max - min));
};

// get several random items
const getSeveralRandomItems = (array, count) => {
  let set = new Set();
  for (let i = 0; i < count; i++) {
    set.add(getRandomArrayItem(array));
  }
  return [...set];
};

export {
  addLeadingZero,
  capitalizeChar,
  extend,
  generateID,
  getRandomArrayItem,
  getRandomIntegerNumber,
  getRandomNumber,
  getSeveralRandomItems,
};
