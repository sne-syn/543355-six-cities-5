// import React, {PureComponent} from 'react';
// import {postReview} from '../store/api-actions';
// import {connect} from 'react-redux';

// const withInputs = (Component) => {
//   class WithInputs extends PureComponent {
//     constructor(props) {
//       super(props);
//       this.state = {
//         rating: null,
//         date: ``,
//         text: ``,
//         textLength: 0,
//         buttonDisabled: true,
//       };

//       this._handleSubmit = this._handleSubmit.bind(this);
//       this._handleRatingChange = this._handleRatingChange.bind(this);
//       this._handleTextareaChange = this._handleTextareaChange.bind(this);
//       this._handleButtonDisable = this._handleButtonDisable.bind(this);
//     }

//     _handleSubmit(evt) {
//       const {handleSubmit} = this.props;
//       evt.preventDefault();

//       handleSubmit({
//         rating: this.state.rating,
//         text: this.state.date,
//       });

//       this.setState({
//         rating: null,
//         date: ``,
//         text: ``,
//         textLength: 0,
//         buttonDisabled: true,
//       });
//       document.querySelector(`.reviews__form`).reset();
//     }

//     _handleRatingChange(evt) {
//       this.setState({
//         rating: evt.target.value,
//         buttonDisabled: this._handleButtonDisable()
//       });
//     }

//     _handleTextareaChange(evt) {
//       this.setState({
//         text: evt.target.value,
//         textLength: evt.target.value.length,
//         buttonDisabled: this._handleButtonDisable()
//       });
//     }

//     _handleButtonDisable() {
//       if (this.state.textLength >= 50 && this.state.textLength < 300 && this.state.rating > 0) {
//         return false;
//       }

//       return true;
//     }

//     render() {
//       return (
//         <Component
//           buttonDisabled={this.state.buttonDisabled} handleRatingChange={this._handleRatingChange} handleTextareaChange={this._handleTextareaChange}
//           handleSubmit={this._handleSubmit}
//           {...this.props}
//         />
//       );
//     }
//   }

//   return WithInputs;
// };

// const mapDispatchToProps = (dispatch) => ({
//   handleSubmit(review) {
//     dispatch(postReview(review));
//   }
// });

// export {withInputs};
// export default connect(null, mapDispatchToProps)(withInputs);
