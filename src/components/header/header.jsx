import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from "../../utils/const";

const Header = ({isLogged}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isLogged ? (<Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </Link>) : (<Link to={AppRoute.LOGIN} className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div><span className="header__login">Sign in</span></Link>)}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default React.memo(Header);
