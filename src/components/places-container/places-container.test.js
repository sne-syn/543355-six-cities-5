import React from 'react';
import renderer from 'react-test-renderer';
import {PlacesContainer} from './places-container';

jest.mock(`../list-hover-on-map/list-hover-on-map`, () => `ListHoverOnMap`);
jest.mock(`../map-section/map-section`, () => `MapSection`);
jest.mock(`../sort/sort`, () => `Sort`);
jest.mock(`../../HOCs/with-toggler/with-toggler`, () => (Component) => (props) => <Component {...props} toggleComponent={()=>{}} on={false} />);

describe(`<PlacesContainer /> test`, () => {
  it(`renders PlacesContainer with multiple offers`, () => {
    const tree = renderer
    .create(
        <PlacesContainer
          activeElement={`Paris`}
          unsortedOffers={[]}
          highlightedOfferId={`5`}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
