import { all, takeLatest, put, call } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { meetupsSuccess, getMeetupSuccess, getMeetupFailure } from './actions';

export function* loadMeetups() {
  const response = yield call(api.get, 'meetups');

  const data = response.data.map(meetup => {
    return {
      ...meetup,
      url: `meetup/edit/${meetup.id}`,
      dataFormatted: format(
        parseISO(meetup.date),
        "'dia' dd 'de' MMMM', às' H:mm'h'",
        {
          locale: pt,
        }
      ),
    };
  });

  yield put(meetupsSuccess(data));
}

export function* setMeetup({ payload }) {
  const { pathname } = payload;
  const [, , , id] = pathname.split('/');

  if (!id) {
    yield put(getMeetupFailure());
    return;
  }

  const response = yield call(api.get, `meetups/${id}`);

  yield put(getMeetupSuccess(response.data));
}

export function* createMeetup({ payload }) {
  try {
    const { data } = payload;
    const { title, description, date, location } = data;
    yield call(api.post, 'meetups', {
      title,
      description,
      date,
      location,
      image_id: 1,
    });

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
  takeLatest('@meetup/SET_MEETUP_REQUEST', setMeetup),
]);
