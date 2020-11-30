import PropTypes from 'prop-types';
import React from 'react';
import {hostPropTypesMock} from '../../utils/prop-types-mocks';

const Host = ({description, host}) => {
  const {isPro, avatar, name} = host;
  const isProMark = isPro ? `property__avatar-wrapper--pro` : ``;
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper ${isProMark}`}>
          <img className="property__avatar user__avatar" src={`/${avatar}`} width="74" height="74" alt="Host avatar" />
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
  host: PropTypes.shape(hostPropTypesMock),
};

export default Host;
