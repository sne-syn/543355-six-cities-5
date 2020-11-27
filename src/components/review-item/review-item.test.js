import React from 'react';
import renderer from 'react-test-renderer';
import ReviewItem from './review-item';

const review = {
  author: `Beaulah`,
  avatar: `https://robohash.org/54?set=set2&size=54x54`,
  date: `2004-09-06T16:12:32.554Z`,
  id: 0,
  rating: 1,
  comment: `Antoni is a great host and us a wonderful home. His suggestions for places to go were killer!10/10 would stay again.`,
};

it(`ReviewItem is rendered correctly`, () => {
  const tree = renderer.create((
    <ReviewItem
      review={review}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
