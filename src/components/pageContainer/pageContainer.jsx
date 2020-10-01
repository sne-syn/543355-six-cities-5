import React from 'react';
import PropTypes from "prop-types";
import Header from '../header/header';
import Main from '../main/main';

const PageContainer = (props) => {
  const {placesCount} = props;

  return (
    <div className="page page--gray page--main">
      <Header />
      <Main placesCount={placesCount} />
    </div>
  );
};

PageContainer.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default PageContainer;
