import React from 'react';
import {AppRoute} from '../../utils/const';
import {Link, Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

const Footer = () => {
  return (
    <footer className="footer container">
      <Router history={browserHistory}>
        <Link to={AppRoute.ROOT} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </Router>
    </footer>
  );
};

export default Footer;
