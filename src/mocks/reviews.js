import {
  addLeadingZero,
  getRandomIntegerNumber,
  getRandomNumber
} from '../utils/common.js';

let i = 0;
const authors = [`Amado`, `Janette`, `Whitney`, `Beaulah`, `Marquis`, `Mathew`, `Ione`, `Bruno`, `Lashawnda`, `Rosina`];
const texts = [`Maria’s place is at a perfect location, very easy to get around with public transportation and walking distance to awesome bars and restaurants. Her place is great, very clean and has everything you need.`, `The flat is on the second floor of a noisy street so the shutters need to be fully closed to block out the noise. Amenities are great and all in all I had a great stay :)`, `Great spot! Close to the metro, lots of things to do nearby, and great tips from Valen. Washer, bathroom, and other great amenities. Definitely a good place to stay!`, `U Vila it's a wonderfully located house, with the best garden and pool ever! The house itself, the views and the sorroundings places are idyllic. Hope I can visit it again.`, `Antoni is a great host and us a wonderful home. His suggestions for places to go were killer! 10/10 would stay again.`, `There’s a stunning beach with great snorkelling just a 6min drive, a few other beautiful beaches close by too.`];

const generateReview = () => {
  return {
    id: i++,
    avatar: `https://robohash.org/${getRandomIntegerNumber(1, 100)}?set=set2&size=54x54`,
    text: texts[getRandomIntegerNumber(0, texts.length)],
    author: authors[getRandomIntegerNumber(0, authors.length)],
    date: `${getRandomIntegerNumber(2000, 2020)}-${addLeadingZero(getRandomIntegerNumber(1, 12))}-${addLeadingZero(getRandomIntegerNumber(1, 31))}T16:12:32.554Z`,
    rating: getRandomNumber(1, 5)
  };
};

const generateReviews = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateReview);
};

export {
  generateReviews
};
