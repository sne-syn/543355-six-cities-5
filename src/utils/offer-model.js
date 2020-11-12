export const adaptOffer = (data) => {
  return {
    id: data[`id`],
    city: {
      location: adaptLocation(data[`city`][`location`]),
      name: data[`city`][`name`]
    },
    title: data[`title`],
    images: data[`images`],
    previewImage: data[`preview_image`],
    price: data[`price`],
    type: data[`type`],
    rating: data[`rating`],
    goods: data[`goods`],
    bedrooms: data[`bedrooms`],
    maxGuests: data[`max_adults`],
    description: data[`description`],
    isPremium: Boolean(data[`is_favorite`]),
    isFavorite: Boolean(data[`is_favorite`]),
    host: adaptHost(data[`host`]),
    location: adaptLocation(data[`location`])
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
    id: host[`id`],
    avatar: host[`avatar_url`],
    name: host[`name`],
    isPro: Boolean(host[`is_pro`]),
  };
};

export const adaptReview = (review) => {
  return {
    id: review[`id`],
    avatar: review[`user`][`avatar_url`],
    text: review[`comment`],
    author: review[`user`][`name`],
    date: review[`date`],
    rating: review[`rating`],
    isPro: Boolean(review[`is_pro`]),
    userId: review[`user`][`id`]
  };
};

export const adaptOffers = (offers) => {
  return offers.map((offer) => adaptOffer(offer));
};

export const adaptReviews = (reviews) => {
  return reviews.map((review) => adaptReview(review));
};
