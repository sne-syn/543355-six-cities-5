import React from 'react';
import renderer from 'react-test-renderer';
import {AuthorizationStatus} from '../../utils/const';
import ReviewsList from './reviews-list';
import {reviews} from '../../test-data/reviews-test-data';

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
