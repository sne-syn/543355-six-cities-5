import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {withInputs} from './with-inputs';

configure({adapter: new Adapter()});

const defaultState = {
  rating: 0,
  comment: ``,
  commentLength: 0,
  buttonDisabled: true,
};
const noop = () => {};
const MockComponent = () => <div />;
const MockComponentWrapped = withInputs(MockComponent);
describe(`withInputs checks`, () => {
  it(`Should setup defaultState `, () => {
    const wrapper = shallow(<MockComponentWrapped
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
      userName={``}
      value={``}
    />);
    expect(wrapper.state().rating).toEqual(0);
    expect(wrapper.state().comment).toEqual(``);
    expect(wrapper.state().commentLength).toEqual(0);
    expect(wrapper.state().buttonDisabled).toEqual(true);
  });
  
});
