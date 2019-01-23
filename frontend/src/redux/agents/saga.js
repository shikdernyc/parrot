import { AGENT_ROUTE } from 'Constants/app.js';
import { create, getAll, findById } from 'Data/models/ServerModel';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  CREATE_AGENT,
  GET_ALL_AGENTS,
  SET_CURRENT_AGENT
} from 'Constants/actionTypes.js';
import { updateAgentList, updateCurrentAgent } from './actions';

function * handleCreateAgent ({ agentSchema, history }) {
  try {
    const agent = yield call(create, AGENT_ROUTE, agentSchema);
    history.push(`/agent/${agent._id}/domains`);
    // TODO: push to agent's route
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function * handleGetAllAgents () {
  try {
    const agents = yield call(getAll, AGENT_ROUTE);
    yield put(updateAgentList(agents));
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function * handleSetCurrentAgent ({ id }) {
  try {
    const agent = yield call(findById, AGENT_ROUTE, id);
    // TODO: Update intent, domain and entity list as well
    yield put(updateCurrentAgent(agent));
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
  console.log('agent sagas');
  yield all([
    fork(watchCreateAgent),
    fork(watchGetAllAgents),
    fork(watchSetCurrentAgent)
  ]);
}
