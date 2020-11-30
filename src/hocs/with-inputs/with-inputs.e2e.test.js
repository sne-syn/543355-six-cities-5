import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {withInputs} from './with-inputs';
import {extend} from '../../utils/common';
configure({adapter: new Adapter()});

const noop = () => {};
const defaultState = {
  rating: 0,
  comment: ``,
  commentLength: 0,
  buttonDisabled: true,
};

const MockComponent = () => <div />;
const MockComponentWrapped = withInputs(MockComponent);
const component = <MockComponentWrapped
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
/>;
let wrapper;

beforeEach(() => {
  wrapper = shallow(component);
});

afterEach(() => {
  wrapper.unmount();
});

describe(`withInputs checks`, () => {
  it(`Should setup defaultState `, () => {
    expect(wrapper.state().rating).toEqual(0);
    expect(wrapper.state().comment).toEqual(``);
    expect(wrapper.state().commentLength).toEqual(0);
    expect(wrapper.state().buttonDisabled).toEqual(true);
  });
  it(`withInputs should update state, count commentLength and disable Button with too short message`, () => {
    wrapper.setState(extend(defaultState, {
      comment: `Some comment to be submited. Some comment to be submited.`,
      commentLength: (`Some comment to be submited. Some comment to be submited.`).length
    }));
    expect(wrapper.state()).toEqual({
      rating: 0,
      comment: `Some comment to be submited. Some comment to be submited.`,
      commentLength: 57,
      buttonDisabled: true,
    });
  });
});
