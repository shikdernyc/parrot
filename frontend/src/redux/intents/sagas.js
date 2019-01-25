import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { SET_INTENT_LIST_AGENT } from 'Constants/actionTypes';
import { updateIntentList } from './actions';
import { getAllIntents } from 'Data/models/Agent';

function * handleSetIntentListAgent ({ payload: { agentID } }) {
  try {
    const intentList = yield call(getAllIntents, agentID);
    console.log(intentList);
    yield put(updateIntentList(intentList));
  } catch (error) {
    throw error;
  }
}

export function * watchSetIntentListAgent () {
  yield takeEvery(SET_INTENT_LIST_AGENT, handleSetIntentListAgent);
}

export default function * rootSaga () {
  yield all([fork(watchSetIntentListAgent)]);
}
