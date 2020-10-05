import React from 'react';
import PropTypes from "prop-types";
import Header from '../header/header';
import Main from '../main/main';

const Page = (props) => {
  const {placesCount} = props;

  return (
    <div className="page page--gray page--main">
      <Header />
      <Main placesCount={placesCount} />
    </div>
  );
};

Page.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default Page;
