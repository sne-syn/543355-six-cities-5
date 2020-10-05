import React from 'react';
import PropTypes from "prop-types";
import Page from '../page/page';

const App = (props) => {
  const {placesCount} = props;

  return (
    <Page placesCount={placesCount} />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
