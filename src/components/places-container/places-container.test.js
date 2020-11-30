import React from 'react';
import renderer from 'react-test-renderer';
import {PlacesContainer} from './places-container';
import {offers} from '../../test-data/offers-test-data';

jest.mock(`../list-hover-on-map/list-hover-on-map`, () => `ListHoverOnMap`);
jest.mock(`../map-section/map-section`, () => `MapSection`);
jest.mock(`../sort/sort`, () => `Sort`);
jest.mock(`../../hocs/with-toggler/with-toggler`, () => (Component) => (props) => <Component {...props} toggleComponent={()=>{}} on={false} />);

describe(`<PlacesContainer /> test`, () => {
  it(`renders PlacesContainer with multiple offers`, () => {
    const tree = renderer
    .create(
        <PlacesContainer
          activeElement={`Paris`}
          unsortedOffers={offers}
          highlightedOfferId={`5`}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
