import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Toggler extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      on: this.props.defaultOnValue
    };
    this.toggleComponent = this.toggleComponent.bind(this);
  }

  toggleComponent() {
    this.setState((prevState) => {
      return {
        on: !prevState.on
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.renderWithToggle(this.state.on, this.toggleComponent)}
      </React.Fragment>
    );
  }
}

Toggler.defaultProps = {
  defaultOnValue: false
};

Toggler.propTypes = {
  defaultOnValue: PropTypes.bool.isRequired,
  renderWithToggle: PropTypes.func.isRequired
};

export default Toggler;
