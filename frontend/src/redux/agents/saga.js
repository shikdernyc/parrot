import { create, getAll, findById } from 'Data/models/Agent';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  CREATE_AGENT,
  GET_ALL_AGENTS,
  SET_CURRENT_AGENT,
  CREATE_AGENT_FAILED,
  CREATE_AGENT_SUCCEEDED
} from 'Constants/actionTypes.js';
import { updateAgentList, updateCurrentAgent } from './actions';
import { setDomainListAgent } from '../domains/actions';

function * handleCreateAgent ({ agentSchema, history }) {
  try {
    const result = yield call(create, agentSchema);
    yield put({ type: CREATE_AGENT_SUCCEEDED, payload: result });
    // TODO: push to agent's route
    // history.push(`/agent/${result._id}`);
  } catch (error) {
    console.error(error);
    yield put({ type: CREATE_AGENT_FAILED, payload: error });
  }
}

function * handleGetAllAgents () {
  try {
    const agents = yield call(getAll);
    yield put(updateAgentList(agents));
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function * handleSetCurrentAgent ({ id, history }) {
  try {
    const agent = yield call(findById, id);
    yield put(updateCurrentAgent(agent));
    yield put(setDomainListAgent(id));
    // yield put(setIntentListAgent(id));
    if (history) {
      history.push(`/agent/${id}`);
    }
  } catch (error) {}
}

export function * watchCreateAgent () {
  yield takeEvery(CREATE_AGENT, handleCreateAgent);
}

export function * watchGetAllAgents () {
  yield takeEvery(GET_ALL_AGENTS, handleGetAllAgents);
}

export function * watchSetCurrentAgent () {
  yield takeEvery(SET_CURRENT_AGENT, handleSetCurrentAgent);
}

export default function * rootSaga () {
  yield all([
    fork(watchCreateAgent),
    fork(watchGetAllAgents),
    fork(watchSetCurrentAgent)
  ]);
}
