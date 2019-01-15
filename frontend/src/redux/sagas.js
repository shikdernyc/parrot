import { all } from 'redux-saga/effects';
import app from './app/saga';
import agents from './agents/saga';

export default function * rootSaga (getState) {
  yield all([app(), agents()]);
}
