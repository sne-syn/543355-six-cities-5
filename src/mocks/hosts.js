import {
  getRandomIntegerNumber,
  getRandomArrayItem
} from '../utils/common.js';

const Names = [`Amado`, `Janette`, `Whitney`, `Beaulah`, `Marquis`];
let i = 0;
const generateHost = () => {
  return {
    id: `id-${i++}`,
    avatar: `https://robohash.org/${getRandomIntegerNumber(1, 100)}?set=set2&size=74x74`,
    name: getRandomArrayItem(Names),
    isPro: Math.random() > 0.5
  };
};

export {
  generateHost
};
