import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ReviewForm} from './review-form';

configure({adapter: new Adapter()});
const noop = () => {};
const handleSubmit = jest.fn();
const handleTextareaChange = jest.fn();
const handleRatingChange = jest.fn();
const component = <ReviewForm
    buttonDisabled={true}
    comment={``}
    offer={{}}
    offerItemId={1}
    rating={0}
    userAvatar={``}
    userId={0}
    userIsPro={true}
    userName ={``}
    handleRatingChange={handleRatingChange}
    updateReviewsInStoreAction={noop}
    handleTextareaChange={handleTextareaChange}
    handleSubmit={handleSubmit}
    onSubmitAction={handleSubmit}
    onRatingChangeAction={noop}
    value={``}
  />;

describe(`ReviewForm checks`, () => {
  it('has a text area and a button', () => {
    const wrapped = shallow(component)
    // expect(wrapped.find('.reviews__rating-form.form__rating').length).toEqual(1);
    expect(wrapped.find('.reviews__textarea.form__textarea').length).toEqual(1);
    expect(wrapped.find('button.reviews__submit').length).toEqual(1);
  });
  // it(`Click on submit button ReviewForm`, () => {
  //   const handleSubmit = jest.fn();
  //   const handleTextareaChange = jest.fn();
  //   const handleRatingChange = jest.fn();

  //   wrapper.find(`form`).simulate(`submit`, {preventDefault() {}});
  //   expect(handleSubmit).toHaveBeenCalledTimes(1);
  // });
});
