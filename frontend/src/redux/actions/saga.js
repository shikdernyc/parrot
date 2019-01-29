import { ACTION_ROUTE } from 'Constants/app.js';
import { create, getAll, findById } from 'Data/models/Action';
import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  CREATE_ACTION,
  GET_ALL_ACTIONS
} from 'Constants/actionTypes.js';
import { updateActionList, updateCurrentAction } from './actions';

function * handleCreateAction ({ actionSchema, history }) {
  try {
    const result = yield call(create, ACTION_ROUTE, actionSchema);
    // yield put({ type: CREATE_AGENT_SUCCEEDED, payload: result });
    // history.push(`/agent/${result._id}/domains`);
    // TODO: push to agent's route
  } catch (error) {
    console.error(error);
    // yield put({ type: CREATE_AGENT_FAILED, payload: error });
  }
}

function * handleGetAllActions ({ domainID }) {
  console.log('handleGetAllActions');
  console.log(domainID);
  try {
    const actions = yield call(getAll, domainID);
    yield put(updateActionList(actions));
  } catch (error) {
    console.log(error);
    throw error;
  }
}
//
// function * handleSetCurrentAgent ({ id }) {
//   try {
//     const agent = yield call(findById, AGENT_ROUTE, id);
//     // TODO: Update intent, domain and entity list as well
//     yield put(updateCurrentAgent(agent));
//   } catch (error) {}
// }
//
export function * watchCreateAction () {
  yield takeLatest(CREATE_ACTION, handleCreateAction);
}

export function * watchGetAllActions () {
  yield takeEvery(GET_ALL_ACTIONS, handleGetAllActions);
}

// export function * watchSetCurrentAgent () {
//   yield takeEvery(SET_CURRENT_AGENT, handleSetCurrentAgent);
// }

export default function * rootSaga () {
  yield all([
    fork(watchCreateAction),
    fork(watchGetAllActions)
    // fork(watchSetCurrentAgent)
  ]);
}
