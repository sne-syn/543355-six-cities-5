import React from 'react';
import PropTypes from 'prop-types';

const Host = ({description, hostID, hosts}) => {
  const host = hosts.find((item) => {
    return item.id === hostID;
  });
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper ${host.isPro && (`property__avatar-wrapper--pro`)} user__avatar-wrapper`}>
          <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {host.name}
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
  hosts: PropTypes.array.isRequired,
  hostID: PropTypes.string.isRequired,
};

export default Host;
