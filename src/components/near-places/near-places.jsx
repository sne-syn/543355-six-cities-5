import React from 'react';
import List from '../list/list';

const NearPlaces = (props) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <List type={`near-places`} {...props} />
    </section>
  );
};

export default NearPlaces;
