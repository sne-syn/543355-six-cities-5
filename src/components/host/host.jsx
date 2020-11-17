import PropTypes from 'prop-types';
import React from 'react';

const Host = ({description, host}) => {
  const {isPro, avatar, name} = host;
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper ${isPro && (`property__avatar-wrapper--pro`)} user__avatar-wrapper`}>
          <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {name}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">{description}</p>
      </div>
    </div>
  );
};

Host.propTypes = {
  description: PropTypes.string.isRequired,
  host: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired
  })
};

export default Host;
