import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import Header from '../header/header';
import LocationsItem from '../locations-item/locations-item';

class LoginPage extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    const {activeElement} = this.props;
    return (
      <div className="page page--gray page--login">
        <Header {...this.props}/>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="" onSubmit={this.handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input ref={this.loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required="" />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input ref={this.passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required="" />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <LocationsItem cityName={activeElement} />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

LoginPage.propTypes = {
  activeElement: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    activeElement: state.activeElement
  };
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {LoginPage};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
