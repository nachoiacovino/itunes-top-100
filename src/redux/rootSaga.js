import { all, call } from 'redux-saga/effects';

import songsSagas from './songs/songsSagas';

export default function* rootSaga() {
  yield all([call(songsSagas)]);
}
