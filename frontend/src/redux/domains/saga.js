import { create, findById, getAllDomains } from 'Data/models/Domain';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  SET_DOMAIN_LIST_AGENT,
  CREATE_DOMAIN,
  SET_CURRENT_DOMAIN
} from 'Constants/actionTypes.js';
import {
  updateDomainList,
  addToDomainList,
  updateCurrentDomain
} from './actions';
import { setStoryListDomain } from '../stories/actions';

function * handleCreateDomain ({ domainSchema }) {
  console.log(domainSchema);
  try {
    const domain = yield call(create, domainSchema);
    yield put(addToDomainList(domain));
    // history.push('/domains');
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function * handleSetDomainListAgent ({ payload: { agentID } }) {
  try {
    const domains = yield call(getAllDomains, agentID);
    yield put(updateDomainList(domains));
    // if (domains.length === 0) {
    //   throw new Error('Empty domain list');
    // } else {
    //   // yield put(setCurrentDomain(domains[0]._id));
    // }
  } catch (error) {
    // TODO: Handle empty domain list error
    // TODO: handle unable to retrieve domain list error
    console.log(error.message);
    throw error;
  }
}

function * handleSetCurrentDomain ({ payload: { id, history } }) {
  try {
    const domain = yield call(findById, id);
    yield put(updateCurrentDomain(domain));
    yield put(setStoryListDomain(id));
    // handle if history is passed
    if (history) {
      console.log('History received');
    }
  } catch (error) {
    // TODO: Handle failure
    throw error;
  }
}

export function * watchCreateDomain () {
  yield takeEvery(CREATE_DOMAIN, handleCreateDomain);
}

export function * watchSetDomainListAgent () {
  yield takeEvery(SET_DOMAIN_LIST_AGENT, handleSetDomainListAgent);
}

export function * watchSetCurrentDomain () {
  yield takeEvery(SET_CURRENT_DOMAIN, handleSetCurrentDomain);
}

export default function * rootSaga () {
  yield all([
    fork(watchCreateDomain),
    fork(watchSetDomainListAgent),
    fork(watchSetCurrentDomain)
  ]);
}
