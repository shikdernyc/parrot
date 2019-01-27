import {
  ADD_TO_DOMAIN_LIST,
  UPDATE_DOMAIN_LIST,
  SET_DOMAIN_LIST_AGENT,
  CREATE_DOMAIN,
  SET_CURRENT_DOMAIN,
  UPDATE_CURRENT_DOMAIN
} from 'Constants/actionTypes';

export function createDomain (domainSchema) {
  return {
    type: CREATE_DOMAIN,
    payload: { domainSchema }
  };
}

export function setCurrentDomain (id, history = null) {
  return {
    type: SET_CURRENT_DOMAIN,
    payload: {
      id,
      history
    }
  };
}

export function updateCurrentDomain (newDomain) {
  return {
    type: UPDATE_CURRENT_DOMAIN,
    payload: {
      newDomain
    }
  };
}

export function addToDomainList (domain) {
  return {
    type: ADD_TO_DOMAIN_LIST,
    domain
  };
}

export function setDomainListAgent (agentID) {
  return {
    type: SET_DOMAIN_LIST_AGENT,
    payload: {
      agentID
    }
  };
}

export function updateDomainList (newDomainList) {
  return {
    type: UPDATE_DOMAIN_LIST,
    payload: {
      newDomainList
    }
  };
}
