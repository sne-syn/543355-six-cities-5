import React from 'react';
import renderer from 'react-test-renderer';
import {AuthorizationStatus} from '../../utils/const';
import ReviewsList from './reviews-list';
const reviews = [{
  author: `Ione`,
  avatar: `https://robohash.org/98?set=set2&size=54x54`,
  date: `2007-10-13T16:12:32.554Z`,
  id: 1,
  rating: 4,
  comment: `There’s a stunning beach with great snorkelling just a 6min drive, a few other beautiful beaches close by too.`,
}, {
  author: `Bruno`,
  avatar: `https://robohash.org/53?set=set2&size=54x54`,
  date: `2005-08-25T16:12:32.554Z`,
  id: 2,
  rating: 3,
  comment: `Maria’s place is at a perfect location, very easy to get around with public transportation and walking distance to awesome bars and restaurants. Her place is great, very clean and has everything you need.`,
}];

jest.mock(`../review-form/review-form`, () => `ReviewForm`);
jest.mock(`./../review-item/review-item`, () => `ReviewItem`);

describe(`<ReviewsList /> test`, () => {
  it(`renders ReviewsList without reviews`, () => {
    const tree = renderer
    .create(
        <ReviewsList
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          reviews={[]}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders ReviewsList with multiple reviews`, () => {
    const tree = renderer
    .create(
        <ReviewsList
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          reviews={reviews} />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders ReviewsList with ReviewsForm for auth-user`, () => {
    const tree = renderer
    .create(
        <ReviewsList
          authorizationStatus={AuthorizationStatus.AUTH}
          reviews={[]}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders ReviewsList without ReviewsForm for non-auth-user`, () => {
    const tree = renderer
    .create(
        <ReviewsList
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          reviews={reviews}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
