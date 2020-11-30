import React from 'react';
import renderer from 'react-test-renderer';
import ReviewItem from './review-item';
import {review} from '../../test-data/reviews-test-data';

it(`ReviewItem is rendered correctly`, () => {
  const tree = renderer.create((
    <ReviewItem
      review={review}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
