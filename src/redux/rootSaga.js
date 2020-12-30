import { all, call } from 'redux-saga/effects';

import albumsSagas from './albums/albumsSagas';

export default function* rootSaga() {
  yield all([call(albumsSagas)]);
}
