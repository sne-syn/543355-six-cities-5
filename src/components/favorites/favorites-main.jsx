import React from 'react';
import PropTypes from 'prop-types';

const FavoritesMain = (props) => {
  const {className, children} = props;
  return (
    <main className={`page__main ${className}`}>
      {children}
    </main>
  );
};

FavoritesMain.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FavoritesMain;
