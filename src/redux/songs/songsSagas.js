import { call, put, takeLatest } from 'redux-saga/effects';

import iTunes from '../../api/iTunes';
import { GET_SONGS_FAIL, GET_SONGS_START, GET_SONGS_SUCCESS } from './songsTypes';

export function* getSongs() {
  try {
    const res = yield call(iTunes.get, 'topalbums/limit=100/json');

    yield put({ type: GET_SONGS_SUCCESS, payload: res.data.feed.entry });
  } catch (err) {
    yield put({
      type: GET_SONGS_FAIL,
      payload: err,
    });
  }
}

export default function* songsSagas() {
  yield takeLatest(GET_SONGS_START, getSongs);
}
