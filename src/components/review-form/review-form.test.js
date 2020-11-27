import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewForm} from './review-form';
const noop = () => {};
jest.mock(`../star-buttons/star-buttons`, () => `StarButtons`);
jest.mock(`../textarea-input/textarea-input`, () => `TextareaInput`);

test(`Render ReviewForm`, () => {
  const tree = renderer
    .create(
        <ReviewForm
          comment={``}
          offer={{}}
          offerItemId={1}
          rating={0}
          userAvatar={``}
          userId={0}
          userIsPro={true}
          userName ={``}
          updateReviewsInStoreAction={noop}
          onChangeAction={noop}
          onSubmitAction={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
