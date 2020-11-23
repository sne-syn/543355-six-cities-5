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

export {
  addLeadingZero,
  capitalizeChar,
  extend,
};
