import {
  CREATE_INTENT,
  UPDATE_INTENT_LIST,
  SET_INTENT_LIST_DOMAIN,
  ADD_TO_INTENT_LIST,
  SET_CURRENT_INTENT,
  DELETE_INTENT,
  DELETE_INTENT_FROM_LIST,
  UPDATE_CURRENT_INTENT,
  UPDATE_INTENT
} from 'Constants/actionTypes';

export const updateIntentList = function (newList) {
  return {
    type: UPDATE_INTENT_LIST,
    payload: {
      newList
    }
  };
};

export const setIntentListDomain = function (domainID) {
  return {
    type: SET_INTENT_LIST_DOMAIN,
    payload: {
      domainID
    }
  };
};

export const addToIntentList = function (newIntent) {
  return {
    type: ADD_TO_INTENT_LIST,
    payload: newIntent
  };
};

export const createIntent = function (
  intentSchema,
  onSuccess = null,
  onFailure = null
) {
  return {
    type: CREATE_INTENT,
    payload: {
      intentSchema,
      onSuccess,
      onFailure
    }
  };
};

export const setCurrentIntent = intentID => {
  return {
    type: SET_CURRENT_INTENT,
    payload: intentID
  };
};

export function updateIntent (intent) {
  return {
    type: UPDATE_INTENT,
    intent
  };
}

export function updateCurrentIntent (intent) {
  return {
    type: UPDATE_CURRENT_INTENT,
    intent
  };
}

export function deleteIntent (intent, history) {
  return {
    type: DELETE_INTENT,
    intent,
    history
  };
}

export function deleteIntentFromList (intent) {
  return {
    type: DELETE_INTENT_FROM_LIST,
    intent
  };
}
