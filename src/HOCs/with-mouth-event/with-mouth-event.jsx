import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withMouthEvent = (Component) => {
  class WithMouthEvent extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Component {...this.props} >
          {this.props.children}
        </ Component>
      );
    }
  }

  WithMouthEvent.propTypes = {
    setActiveCardID: PropTypes.func.isRequired,
    resetActiveCardID: PropTypes.func.isRequired
  };
  return WithMouthEvent;
};

export default withMouthEvent;
