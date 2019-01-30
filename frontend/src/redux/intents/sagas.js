import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { SET_INTENT_LIST_DOMAIN, CREATE_INTENT } from 'Constants/actionTypes';
import { updateIntentList, addToIntentList } from './actions';
import { create, getAllForDomain } from 'Data/models/Intent';
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
  payload: { domainID, intentSchema, onSuccess, onFailure }
}) {
  try {
    const intent = yield call(create, domainID, intentSchema);
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

export function * watchSetIntentListDomain () {
  yield takeEvery(SET_INTENT_LIST_DOMAIN, handleSetIntentListDomain);
}

export function * watchCreateIntent () {
  yield takeEvery(CREATE_INTENT, handleCreateIntent);
}

export default function * rootSaga () {
  yield all([fork(watchSetIntentListDomain), fork(watchCreateIntent)]);
}
