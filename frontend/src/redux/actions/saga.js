import {
  create,
  getAll,
  findById,
  updateById,
  deleteById
} from 'Data/models/Action';
import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';
import {
  CREATE_ACTION,
  GET_ALL_ACTIONS,
  CREATE_ACTION_SUCCEEDED,
  SET_CURRENT_ACTION,
  UPDATE_ACTION,
  DELETE_ACTION
} from 'Constants/actionTypes.js';
import { updateActionList, updateCurrentAction, deleteActionFromList } from './actions';

function * handleCreateAction ({ actionSchema, onSuccess, history }) {
  try {
    const result = yield call(create, actionSchema);
    yield put({ type: CREATE_ACTION_SUCCEEDED, payload: result });
    onSuccess(result);
    // history.push(`/agent/${result._id}/domains`);
    // TODO: push to agent's route
  } catch (error) {
    console.error(error);
    // yield put({ type: CREATE_AGENT_FAILED, payload: error });
  }
}

function * handleGetAllActions ({ domainID }) {
  try {
    const actions = yield call(getAll, domainID);
    yield put(updateActionList(actions));
  } catch (error) {
    console.log(error);
    throw error;
  }
}
//
function * handleSetCurrentAction ({ id }) {
  try {
    const action = yield call(findById, id);
    yield put(updateCurrentAction(action));
    // TODO: Update intent, domain and entity list as well
    // yield put(updateCurrentAgent(agent));
  } catch (error) {}
}

function * handleUpdateAction ({ action }) {
  try {
    const updated_action = yield call(updateById, action);
    console.log(updated_action);
    // yield put(updateCurrentAction(action));
    // TODO: Update intent, domain and entity list as well
    // yield put(updateCurrentAgent(agent));
  } catch (error) {}
}

function * handleDeleteAction ({ action, history }) {
  try {
    const result = yield call(deleteById, action);
    history.push(`/domain/${action.domainID}/actions`);
    yield put(deleteActionFromList(action));
    // TODO: Update intent, domain and entity list as well
    // yield put(updateCurrentAgent(agent));
  } catch (error) {}
}
//
export function * watchCreateAction () {
  yield takeLatest(CREATE_ACTION, handleCreateAction);
}

export function * watchGetAllActions () {
  yield takeEvery(GET_ALL_ACTIONS, handleGetAllActions);
}

export function * watchSetCurrentAgent () {
  yield takeEvery(SET_CURRENT_ACTION, handleSetCurrentAction);
}

export function * watchUpdateAction () {
  yield takeEvery(UPDATE_ACTION, handleUpdateAction);
}

export function * watchDeleteAction () {
  yield takeEvery(DELETE_ACTION, handleDeleteAction);
}

export default function * rootSaga () {
  yield all([
    fork(watchCreateAction),
    fork(watchGetAllActions),
    fork(watchSetCurrentAgent),
    fork(watchUpdateAction),
    fork(watchDeleteAction)
  ]);
}
