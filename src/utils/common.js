const AccomodationTypes = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`
};

// add leading zero to num < 10
const addLeadingZero = (value) => {
  return (value < 10) ? `0${value}` : value;
};

const generateID = function () {
  return `_${Math.random().toString(36).substr(2, 9)}`;
};

// generate randome integer
const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

// generate random non-integer
const getRandomNumber = (min, max) => {
  return min + (Math.random() * (max - min));
};

// get 1 random item from arrayOfItems
const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

// get several random items
const getSeveralRandomItems = (array, count) => {
  let set = new Set();
  for (let i = 0; i < count; i++) {
    set.add(getRandomArrayItem(array));
  }
  return [...set];
};

// capitalize first char only
const capitalizeChar = (str) => {
  if (typeof str !== `string`) {
    return ``;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export {
  AccomodationTypes,
  addLeadingZero,
  capitalizeChar,
  generateID,
  getRandomIntegerNumber,
  getRandomArrayItem,
  getRandomNumber,
  getSeveralRandomItems,
};
