import {getRandomIntegerNumber} from '../utils/common';

export const LocationsList = {
  Amsterdam: [
    [52.3909553943508, 4.85309666406198],
    [52.369553943508, 4.85309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3809553943508, 4.939309666406198],
    [52.4006614685059, 4.88902187347412],
    [52.3763414, 4.8999733],
    [52.333889, 4.888803]
  ], Dusseldorf: [
    [51.237402, 6.797314],
    [51.239402000000005, 6.756314000000001],
    [51.248402000000006, 6.763314],
    [51.205402, 6.7613140000000005]
  ], Cologne: [
    [50.947361, 6.9799739999999995],
    [50.949361, 6.976974],
    [50.932361, 6.960974],
    [50.945361, 6.935974],
    [50.913361, 6.9509739999999995]
  ], Brussels: [
    [50.822556999999996, 4.347697],
    [50.844556999999995, 4.346697],
    [50.869557, 4.332697],
    [50.852557, 4.3376969999999995],
    [50.842557, 4.363696999999999]
  ], Hamburg: [
    [53.563341, 10.019654000000001],
    [53.574341000000004, 10.022654000000001]
  ], Paris: [
    [48.83961, 2.342499],
    [48.865610000000004, 2.350499],
    [48.84461, 2.374499],
    [48.861610000000006, 2.340499]
  ]
};

export const CoordinatesMap = {
  AMSTERDAM: {
    latitude: 52.38333,
    longitude: 4.9,
    zoom: getRandomIntegerNumber(10, 14)
  },
  DUSSELDORF: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: getRandomIntegerNumber(10, 14)
  },
  COLOGNE: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: getRandomIntegerNumber(11, 14)
  },
  HAMBURG: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: getRandomIntegerNumber(10, 14)
  },
  PARIS: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: getRandomIntegerNumber(11, 14)
  },
  BRUSSELS: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: getRandomIntegerNumber(10, 14)
  },
};
