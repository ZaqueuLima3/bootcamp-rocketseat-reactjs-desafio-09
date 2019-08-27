import { all, takeLatest, put, call } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  meetupsSuccess,
  meetupsRequest,
  setMeetupRequest,
  setMeetupSuccess,
  setMeetupClearSuccess,
} from './actions';

export function* clearMeetup() {
  yield put(setMeetupClearSuccess());
}

export function* loadMeetups() {
  const response = yield call(api.get, 'meetups');

  const data = response.data.map(meetup => {
    return {
      ...meetup,
      url: `meetup/open`,
      dataFormatted: format(
        parseISO(meetup.date),
        "dd 'de' MMMM', às' H:mm'h'",
        {
          locale: pt,
        }
      ),
    };
  });

  yield put(meetupsSuccess(data));
}

export function* setMeetup({ payload }) {
  const { id } = payload;

  if (!id) {
    clearMeetup();
    return;
  }

  const response = yield call(api.get, `meetups/${id}`);

  const data = {
    ...response.data,
    date: format(parseISO(response.data.date), "YYY'-'MM'-'dd'T'HH:mm'Z'", {
      locale: pt,
    }),
    dataFormatted: format(
      parseISO(response.data.date),
      "dd 'de' MMMM', às' H:mm'h'",
      {
        locale: pt,
      }
    ),
  };

  yield put(setMeetupSuccess(data));
}

export function* updateMeetup({ payload }) {
  try {
    const { data } = payload;
    yield call(api.put, `meetups/${data.id}`, data);

    yield put(meetupsRequest());
    yield put(setMeetupRequest(data.id));

    toast.success('Meetup atualizado com sucesso!');
    history.push('/meetup/open/1');
  } catch (err) {
    toast.error('Erro ao atualizar meetup, confira seus dados!');
  }
}

export function* createMeetup({ payload }) {
  try {
    const { data } = payload;
    yield call(api.post, 'meetups', data);

    yield put(meetupsRequest());

    toast.success('Meetup cadastrado com sucesso!');
    history.push('/');
  } catch (err) {
    console.tron.log(err);
    toast.error('Erro ao cadastrar meetup, confira seus dados!');
  }
}

export default all([
  takeLatest('@meetup/LOAD_MEETUPS_REQUEST', loadMeetups),
  takeLatest('@meetup/NEW_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/SET_MEETUP_REQUEST', setMeetup),
  takeLatest('@meetup/SET_MEETUP_CLEAR_REQUEST', clearMeetup),
]);
