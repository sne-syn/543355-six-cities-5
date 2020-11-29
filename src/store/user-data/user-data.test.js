import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {userData} from './user-data-reducers';
import {ActionType} from '../action';
import {checkAuth, login} from '../api-actions';
import {APIRoute, AuthorizationStatus, AppRoute} from '../../utils/const';
import {adaptUser} from '../../utils/adapter.js';
import {user} from '../../test-data/user-test-data';
import {extend} from '../../utils/common';
const api = createAPI(() => {});

const initUserData = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userAvatar: ``,
  userEmail: ``,
  userId: null,
  userIsPro: null,
  userName: ``,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(userData(void 0, {})).toEqual(initUserData);
});

it(`Reducer should update authorizationStatus to 'auth'`, () => {
  expect(userData(initUserData, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH
  })).toEqual(extend(initUserData, {
    authorizationStatus: AuthorizationStatus.AUTH,
  }));
});

it(`Reducer should update user information`, () => {
  expect(userData(initUserData, {
    type: ActionType.LOAD_USER_INFORMATION,
    payload: user})
  ).toEqual(extend(initUserData, {
    userAvatar: `https://robohash.org/82?set=set2&size=74x74`,
    userEmail: `trust_no_1@gmail.com`,
    userId: 1,
    userIsPro: false,
    userName: `fox_mulder`
  }));
});

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call to /login and update userInfo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, {fake: true});

    return checkAuthLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_USER_INFORMATION,
        payload: adaptUser({fake: true})
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: `AUTH`
      });
    });
  });
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeuserData = {email: `test@test.ru`, password: `123456`};
    const loginLoader = login(fakeuserData);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fakeuserData}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_INFORMATION,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });
});
