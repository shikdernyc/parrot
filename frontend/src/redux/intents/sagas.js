import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  SET_INTENT_LIST_DOMAIN,
  CREATE_INTENT,
  SET_CURRENT_INTENT,
  UPDATE_INTENT,
  DELETE_INTENT
} from 'Constants/actionTypes';
import {
  updateIntentList,
  addToIntentList,
  updateCurrentIntent,
  deleteIntentFromList
} from './actions';
import { create, getAllForDomain, findById, updateById, deleteById } from 'Data/models/Intent';
// import { getAllIntents } from 'Data/models/Agent';

function * handleSetIntentListDomain ({ payload: { domainID } }) {
  try {
    const intentList = yield call(getAllForDomain, domainID);
    yield put(updateIntentList(intentList));
  } catch (error) {
    throw error;
  }
}

function * handleCreateIntent ({
  payload: { intentSchema, onSuccess, onFailure }
}) {
  try {
    const intent = yield call(create, intentSchema);
    yield put(addToIntentList(intent));
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

function * handleSetCurrentIntent ({ payload: intentID }) {
  // console.log(intentID);
  try {
    const intent = yield call(findById, intentID);
    // console.log(intent);
    yield put(updateCurrentIntent(intent));
    // TODO: Update intent, domain and entity list as well
    // yield put(updateCurrentAgent(agent));
  } catch (error) {}
}

function * handleUpdateIntent ({ intent }) {
  try {
    const updated_intent = yield call(updateById, intent);
    console.log(updated_intent);
    // yield put(updateCurrentAction(action));
    // TODO: Update intent, domain and entity list as well
    // yield put(updateCurrentAgent(agent));
  } catch (error) {}
}

function * handleDeleteIntent ({ intent, history }) {
  try {
    const result = yield call(deleteById, intent);
    history.push(`/domain/${intent.domainID}/intents`);
    yield put(deleteIntentFromList(intent));
    // TODO: Update intent, domain and entity list as well
    // yield put(updateCurrentAgent(agent));
  } catch (error) {}
}

export function * watchSetIntentListDomain () {
  yield takeEvery(SET_INTENT_LIST_DOMAIN, handleSetIntentListDomain);
}

export function * watchCreateIntent () {
  yield takeEvery(CREATE_INTENT, handleCreateIntent);
}

export function * watchSetCurrentAgent () {
  yield takeEvery(SET_CURRENT_INTENT, handleSetCurrentIntent);
}

export function * watchUpdateIntent () {
  yield takeEvery(UPDATE_INTENT, handleUpdateIntent);
}

export function * watchDeleteIntent () {
  yield takeEvery(DELETE_INTENT, handleDeleteIntent);
}

export default function * rootSaga () {
  yield all([
    fork(watchSetIntentListDomain),
    fork(watchCreateIntent),
    fork(watchSetIntentListDomain),
    fork(watchSetCurrentAgent),
    fork(watchUpdateIntent),
    fork(watchDeleteIntent)
  ]);
}
