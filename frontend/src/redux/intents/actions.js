import {
  CREATE_INTENT,
  UPDATE_INTENT_LIST,
  SET_INTENT_LIST_DOMAIN,
  ADD_TO_INTENT_LIST
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
    payload: {
      newIntent
    }
  };
};

export const createIntent = function (
  domainID,
  intentSchema,
  onSuccess = null,
  onFailure = null
) {
  return {
    type: CREATE_INTENT,
    payload: {
      domainID,
      intentSchema,
      onSuccess,
      onFailure
    }
  };
};
