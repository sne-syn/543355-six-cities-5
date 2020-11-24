export const adaptOffer = (data) => {
  return {
    bedrooms: data[`bedrooms`],
    city: {
      location: adaptLocation(data[`city`][`location`]),
      name: data[`city`][`name`]
    },
    description: data[`description`],
    goods: data[`goods`],
    host: adaptHost(data[`host`]),
    id: data[`id`],
    images: data[`images`],
    isFavorite: Boolean(data[`is_favorite`]),
    isPremium: Boolean(data[`is_favorite`]),
    location: adaptLocation(data[`location`]),
    maxGuests: data[`max_adults`],
    previewImage: data[`preview_image`],
    price: data[`price`],
    rating: data[`rating`],
    title: data[`title`],
    type: data[`type`],
  };
};

const adaptLocation = (location) => {
  return {
    latitude: location[`latitude`],
    longitude: location[`longitude`],
    zoom: location[`zoom`]
  };
};

const adaptHost = (host) => {
  return {
    avatar: host[`avatar_url`],
    id: host[`id`],
    isPro: Boolean(host[`is_pro`]),
    name: host[`name`]
  };
};

export const adaptReview = (review) => {
  return {
    author: review[`user`][`name`],
    avatar: review[`user`][`avatar_url`],
    date: review[`date`],
    id: review[`id`],
    isPro: Boolean(review[`is_pro`]),
    rating: review[`rating`],
    comment: review[`comment`],
    userId: review[`user`][`id`]
  };
};

export const adaptOffers = (offers) => {
  return offers.map((offer) => adaptOffer(offer));
};

export const adaptReviews = (reviews) => {
  return reviews.map((review) => adaptReview(review));
};
