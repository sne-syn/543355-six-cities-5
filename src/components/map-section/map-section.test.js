import React from 'react';
import renderer from 'react-test-renderer';
import MapSection from './map-section';
import {offers} from '../../test-data/offers-test-data';

it(`should render MapSection correctly`, () => {
  const tree = renderer
      .create(
          <MapSection
            offersToShowOnMap={offers}
            activeCity={`Paris`}
            activeOffer={0}
          />,
          {
            createNodeMock: () => {
              return document.createElement(`div`);
            }
          }
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
