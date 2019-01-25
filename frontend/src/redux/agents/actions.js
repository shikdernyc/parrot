import {
  CREATE_AGENT,
  GET_ALL_AGENTS,
  UPDATE_AGENT_LIST,
  // ADD_TO_AGENT_LIST,
  SET_CURRENT_AGENT,
  UPDATE_CURRENT_AGENT
} from 'Constants/actionTypes.js';

export function createAgent (history, agentSchema) {
  return {
    type: CREATE_AGENT,
    agentSchema,
    history
  };
}

export function getAllAgents () {
  return {
    type: GET_ALL_AGENTS
  };
}

export function updateAgentList (updatedList) {
  return {
    type: UPDATE_AGENT_LIST,
    updatedList
  };
}

export function setCurrentAgent (id) {
  return {
    type: SET_CURRENT_AGENT,
    id,
    history
  };
}

export function updateCurrentAgent (agent) {
  return {
    type: UPDATE_CURRENT_AGENT,
    agent
  };
}
