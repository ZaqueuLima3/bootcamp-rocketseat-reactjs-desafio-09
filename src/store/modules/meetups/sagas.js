import { all, takeLatest, put, call } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import { meetupsSuccess } from './actions';

export function* meetups() {
  const response = yield call(api.get, 'meetups');

  const data = response.data.map(meetup => {
    return {
      ...meetup,
      url: `meetup/${meetup.id}`,
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

export default all([takeLatest('@meetup/LOAD_MEETUPS_REQUEST', meetups)]);
