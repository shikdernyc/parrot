import {
  CREATE_ACTION,
  SET_CURRENT_ACTION,
  GET_ALL_ACTIONS,
  UPDATE_ACTION_LIST
} from 'Constants/actionTypes.js';

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

export function loadAllAction (domainID) {
  return {
    type: GET_ALL_ACTIONS,
    domainID
  };
}

export function updateActionList (updatedList) {
  return {
    type: UPDATE_ACTION_LIST,
    updatedList
  };
}

// export function addToAgentList (newAgent) {
//   return {
//     type: ADD_TO_AGENT_LIST,
//     newAgent
//   };
// }
//
export function setCurrentAction (history, id) {
  return {
    type: SET_CURRENT_ACTION,
    id,
    history
  };
}
//
// export function updateCurrentAgent (agent) {
//   return {
//     type: UPDATE_CURRENT_AGENT,
//     agent
//   };
// }
