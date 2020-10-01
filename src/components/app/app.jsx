import React from 'react';
import PropTypes from "prop-types";
import PageContainer from '../pageContainer/pageContainer';

const App = (props) => {
  const {placesCount} = props;

  return (
    <PageContainer placesCount={placesCount} />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
