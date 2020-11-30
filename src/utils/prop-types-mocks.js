import PropTypes from 'prop-types';

export const hostPropTypesMock = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired
};

export const offerPropTypesMock = PropTypes.shape({
  id: PropTypes.number.isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  goods: PropTypes.array.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxGuests: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  host: PropTypes.shape(hostPropTypesMock).isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
}).isRequired;

export const offerItemPropTypesMock = PropTypes.shape({
  id: PropTypes.number,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }),
    name: PropTypes.string,
  }),
  title: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.number,
  type: PropTypes.string,
  rating: PropTypes.number,
  goods: PropTypes.array,
  bedrooms: PropTypes.number,
  maxGuests: PropTypes.number,
  description: PropTypes.string,
  host: PropTypes.shape(hostPropTypesMock),
  isPremium: PropTypes.bool,
  isFavorite: PropTypes.bool,
}).isRequired;
