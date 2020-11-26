import React from 'react';
import renderer from 'react-test-renderer';
import TextareaInput from './textarea-input';

const noop = () => {};
test(`Render TextareaInput`, () => {
  const tree = renderer
    .create(<TextareaInput handleInputChange={noop}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
