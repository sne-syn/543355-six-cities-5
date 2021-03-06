import {MemoryRouter} from 'react-router-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import {LocationsItem} from './locations-item';

const noop = () => {};

describe(`<LocationsItem /> test`, () => {
  it(`renders LocationsItem with default props`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <LocationsItem cityName={`Amsterdam`} changeLocation={noop} />
        </MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders LocationsItem with props`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <LocationsItem activeCity={`Paris`} cityName={`Amsterdam`} tab={true} changeLocation={noop} />
        </MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
