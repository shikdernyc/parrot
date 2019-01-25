import { getAllDomains } from 'Data/models/Agent';
import { create } from 'Data/models/Domain';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { SET_DOMAIN_LIST_AGENT, CREATE_DOMAIN } from 'Constants/actionTypes.js';
import { updateDomainList, addToDomainList } from './actions';

function * handleCreateDomain ({ domainSchema, history }) {
  try {
    const domain = yield call(create, domainSchema);
    yield put(addToDomainList(domain));
    history.push('/domains');
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function * handleSetDomainListAgent ({ payload: { agentID } }) {
  try {
    const domains = yield call(getAllDomains, agentID);
    yield put(updateDomainList(domains));
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export function * watchCreateDomain () {
  yield takeEvery(CREATE_DOMAIN, handleCreateDomain);
}

export function * watchSetDomainListAgent () {
  yield takeEvery(SET_DOMAIN_LIST_AGENT, handleSetDomainListAgent);
}

export default function * rootSaga () {
  yield all([fork(watchCreateDomain), fork(watchSetDomainListAgent)]);
}
