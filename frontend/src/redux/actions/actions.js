import {
  CREATE_ACTION,
  CREATE_ACTION_FAILED,
  CREATE_ACTION_SUCCEEDED
} from 'Constants/actionTypes.js';

export function createAction (history, actionSchema) {
  return {
    type: CREATE_ACTION,
    actionSchema,
    history
  };
}

// export function getAllAgents () {
//   return {
//     type: GET_ALL_AGENTS
//   };
// }
//
// export function updateAgentList (updatedList) {
//   return {
//     type: UPDATE_AGENT_LIST,
//     updatedList
//   };
// }

// export function addToAgentList (newAgent) {
//   return {
//     type: ADD_TO_AGENT_LIST,
//     newAgent
//   };
// }
//
// export function setCurrentAgent (history, id) {
//   return {
//     type: SET_CURRENT_AGENT,
//     id,
//     history
//   };
// }
//
// export function updateCurrentAgent (agent) {
//   return {
//     type: UPDATE_CURRENT_AGENT,
//     agent
//   };
// }
