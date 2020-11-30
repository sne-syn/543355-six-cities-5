import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {withInputs} from './with-inputs';
const noop = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withInputs(MockComponent);

it(`withInputs is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      buttonDisabled={true}
      handleRatingChange={noop}
      handleTextareaChange={noop}
      handleSubmit={noop}
      comment={``}
      onSubmitAction={noop}
      offerItemId={8}
      rating={0}
      onChangeAction={noop}
      onRatingChangeAction={noop}
      updateReviewsInStoreAction={noop}
      userAvatar={``}
      userId={2}
      userIsPro={true}
      userName={`may`}
      value={``}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
