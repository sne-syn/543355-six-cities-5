import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withToggler = (Component) => {
  class WithToggler extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        on: this.props.defaultOnValue
      };
      this._toggleComponent = this._toggleComponent.bind(this);
    }

    _toggleComponent() {
      this.setState((prevState) => {
        return {
          on: !prevState.on
        };
      });
    }

    render() {
      return (
        <Component
          on={this.state.on}
          toggleComponent={this._toggleComponent}
          {...this.props}
        />
      );
    }
  }

  WithToggler.defaultProps = {
    defaultOnValue: false
  };

  WithToggler.propTypes = {
    defaultOnValue: PropTypes.bool.isRequired
  };

  return WithToggler;
};

withToggler.propTypes = {
  defaultOnValue: PropTypes.bool.isRequired,
  renderWithToggle: PropTypes.func.isRequired
};

export default withToggler;
