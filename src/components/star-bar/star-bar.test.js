import React from 'react';
import renderer from 'react-test-renderer';
import StarBar from './star-bar';

const testClassName = `property`;

describe(`<StarBar /> render`, () => {
  it(`renders correctly with props`, () => {
    const tree = renderer
    .create(
        <StarBar
          rating={0}
          containerClassName={testClassName}
        >
          <React.Fragment />
        </StarBar>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with default props`, () => {
    const tree = renderer
    .create(
        <StarBar />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
