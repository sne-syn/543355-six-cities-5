import {
  getRandomIntegerNumber,
  getRandomArrayItem
} from '../utils/common.js';

const Names = [`Amado`, `Janette`, `Whitney`, `Beaulah`, `Marquis`];

const generateHost = () => {
  return {
    id: `id-${getRandomIntegerNumber(0, 5)}`,
    avatar: `https://robohash.org/${getRandomIntegerNumber(1, 100)}?set=set2&size=74x74`,
    name: getRandomArrayItem(Names),
    isSuper: Math.random() > 0.5
  };
};

export {
  generateHost
};
