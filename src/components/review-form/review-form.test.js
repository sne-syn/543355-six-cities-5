import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewForm} from './review-form';

const noop = () => {};
jest.mock(`../star-buttons/star-buttons`, () => `StarButtons`);

test(`Render ReviewForm`, () => {
  const tree = renderer
    .create(
        <ReviewForm
          buttonDisabled={true}
          comment={``}
          offer={{}}
          offerItemId={1}
          rating={0}
          userAvatar={``}
          userId={0}
          userIsPro={true}
          userName ={``}
          handleRatingChange={noop}
          updateReviewsInStoreAction={noop}
          handleTextareaChange={noop}
          handleSubmit={noop}
          onSubmitAction={noop}
          onRatingChangeAction={noop}
          value={``}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
