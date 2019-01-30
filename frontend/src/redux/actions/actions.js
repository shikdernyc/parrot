import {
  CREATE_ACTION,
  SET_CURRENT_ACTION,
  GET_ALL_ACTIONS,
  UPDATE_ACTION_LIST,
  UPDATE_CURRENT_ACTION,
  UPDATE_ACTION,
  DELETE_ACTION,
  DELETE_ACTION_FROM_LIST
} from 'Constants/actionTypes.js';

export function createAction (actionSchema, onSuccess, onFailure) {
  return {
    type: CREATE_ACTION,
    actionSchema,
    onSuccess
  };
}

export function loadAllActions (domainID) {
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

export function updateAction (action) {
  return {
    type: UPDATE_ACTION,
    action
  };
}
//
export function setCurrentAction (id) {
  return {
    type: SET_CURRENT_ACTION,
    id
  };
}
//
export function updateCurrentAction (action) {
  return {
    type: UPDATE_CURRENT_ACTION,
    action
  };
}

export function deleteAction (action, history) {
  return {
    type: DELETE_ACTION,
    action,
    history
  };
}

export function deleteActionFromList (action) {
  return {
    type: DELETE_ACTION_FROM_LIST,
    action
  };
}
