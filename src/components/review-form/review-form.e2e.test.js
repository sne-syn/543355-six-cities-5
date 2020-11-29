import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ReviewForm} from "./review-form";

configure({adapter: new Adapter()});
const noop = () => {};
it(`Click on submit button ReviewForm`, () => {
  const handleSubmit = jest.fn();
  const handleTextareaChange = jest.fn();

  const wrapper = shallow(
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
  );

  wrapper.find(`form`).simulate(`submit`, {preventDefault() {}});
  //expect(handleSubmit).toHaveBeenCalledTimes(1);
});