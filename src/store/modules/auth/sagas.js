import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    console.tron.log('Falha na autenticação');
  }
}

export function* signUp({ payload }) {
  try {
    yield call(api.post, 'users', {
      ...payload,
    });

    history.push('/');
  } catch (err) {
    console.tron.log('Falha');
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
