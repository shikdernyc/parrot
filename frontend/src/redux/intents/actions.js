import {
  CREATE_INTENT,
  UPDATE_INTENT_LIST,
  SET_INTENT_LIST_AGENT
} from 'Constants/actionTypes';

export const updateIntentList = function (newList) {
  return {
    type: UPDATE_INTENT_LIST,
    payload: {
      newList
    }
  };
};

export const setIntentListAgent = function (agentID) {
  return {
    type: SET_INTENT_LIST_AGENT,
    payload: {
      agentID
    }
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
