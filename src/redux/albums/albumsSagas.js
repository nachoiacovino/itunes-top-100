import { call, put, takeLatest } from 'redux-saga/effects';

import iTunes from '../../api/iTunes';
import { GET_ALBUMS_FAIL, GET_ALBUMS_START, GET_ALBUMS_SUCCESS } from './albumsTypes';

export function* getAlbums() {
  try {
    const res = yield call(iTunes.get, 'topalbums/limit=100/json');

    yield put({ type: GET_ALBUMS_SUCCESS, payload: res.data.feed.entry });
  } catch (err) {
    yield put({
      type: GET_ALBUMS_FAIL,
      payload: err,
    });
  }
}

export default function* albumsSagas() {
  yield takeLatest(GET_ALBUMS_START, getAlbums);
}
