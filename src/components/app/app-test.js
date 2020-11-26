// import React from 'react';
// import renderer from 'react-test-renderer';
// import App from './app';
// import {Provider} from 'react-redux';
// import configureStore from 'redux-mock-store';

// jest.mock(`react-router-dom`, () => ({Link: `Link`}));
// describe(`Render connected to store component`, () => {
//   const mockStore = configureStore([]);
//   let store = null;
//   let appComponent = null;

//   beforeEach(() => {
//     store = mockStore({
//       USER: {
//         authorizationStatus: `NO_AUTH`
//       }
//     });

//     store.dispatch = jest.fn();

//     appComponent = renderer.create(
//         <Provider store={store}>
//           <App />
//         </Provider>
//     );
//   });

//   it(`Render App`, () => {
//     expect(appComponent.toJSON()).toMatchSnapshot();
//   });
// });
