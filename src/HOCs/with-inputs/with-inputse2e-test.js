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
    updateReviewsInStoreAction={noop}
    userAvatar={``}
    userId={2}
    userIsPro={true}
    userName={`may`}
    value={``}
    />);
  expect(wrapper.state().defaultState).toEqual(defaultState);
});
// it(`withInputs should initialize state from parameter and change it by call`, () => {

//   const wrapper = shallow(
//       <MockComponentWrapped />
//   );

//   expect(wrapper.props().state).toEqual(defaultState);

//   wrapper.props().setState({comment: `Some comment to be submit`});
//   expect(wrapper.props().state).toEqual({
//     rating: 0,
//     comment: `Some comment to be submit`,
//     commentLength: 25,
//     buttonDisabled: true,
//   });

  // wrapper.props().setState({val2: `test54321`});
  // expect(wrapper.props().state).toEqual({
  //   val1: `test12345`,
  //   val2: `test54321`,
  // });
});
