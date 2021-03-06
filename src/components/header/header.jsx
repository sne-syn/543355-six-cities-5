import PropTypes from 'prop-types';
import React from 'react';
import {AppRoute} from '../../utils/const';
import {AuthorizationStatus} from '../../utils/const';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserEmail, getAuthorizationStatus} from '../../store/user-data/user-data-selectors';

const getUserAvatar = (status, userEmail) => {
  switch (status) {
    case AuthorizationStatus.AUTH:
      return {
        linkTo: AppRoute.FAVORITES,
        className: `header__user-name user__name`,
        namePlaceholder: userEmail
      };
    default:
      return {
        linkTo: AppRoute.LOGIN,
        className: `header__login`,
        namePlaceholder: `Sign in`,
      };
  }
};

const Header = ({authorizationStatus, userEmail}) => {
  const {linkTo, className, namePlaceholder} = getUserAvatar(authorizationStatus, userEmail);
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
                <Link to={linkTo} className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className={className}>{namePlaceholder}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userEmail: getUserEmail(state),
});

export {Header};
export default connect(mapStateToProps)(Header);
