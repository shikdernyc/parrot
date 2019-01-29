import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { SET_INTENT_LIST_AGENT, CREATE_INTENT } from 'Constants/actionTypes';
import { updateIntentList } from './actions';
import { create } from 'Data/models/Intent';
// import { getAllIntents } from 'Data/models/Agent';

function * handleSetIntentListAgent ({ payload: { agentID } }) {
  // try {
  //   const intentList = yield call(getAllIntents, agentID);
  //   console.log(intentList);
  //   yield put(updateIntentList(intentList));
  // } catch (error) {
  //   throw error;
  // }
}

function * handleCreateIntent ({
  payload: { intentSchema, onSuccess, onFailure }
}) {
  try {
    const intent = yield call(create, intentSchema);
    if (onSuccess) {
      onSuccess(intent);
    }
  } catch (error) {
    if (onFailure) {
      onFailure(error);
    } else {
      throw error;
    }
  }
}

export function * watchSetIntentListAgent () {
  yield takeEvery(SET_INTENT_LIST_AGENT, handleSetIntentListAgent);
}

export function * watchCreateIntent () {
  yield takeEvery(CREATE_INTENT, handleCreateIntent);
}

export default function * rootSaga () {
  yield all([fork(watchSetIntentListAgent), fork(watchCreateIntent)]);
}
