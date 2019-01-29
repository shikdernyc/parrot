import { CREATE_ACTION } from 'Constants/actionTypes.js';

export function createAction (actionSchema, onSuccess, onFailure) {
  return {
    type: CREATE_ACTION,
    payload: {
      actionSchema,
      onSuccess,
      onFailure
    }
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
