import { all } from 'redux-saga/effects';
import app from './app/saga';
import agents from './agents/saga';
import domains from './domains/saga';
import stories from './stories/sagas';
import intents from './intents/sagas';
import actions from './actions/saga';

export default function * rootSaga (getState) {
  yield all([app(), agents(), domains(), stories(), intents(), actions()]);
}
