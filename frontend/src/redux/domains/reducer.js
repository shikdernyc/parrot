import {
  ADD_TO_DOMAIN_LIST,
  UPDATE_DOMAIN_LIST,
  UPDATE_CURRENT_DOMAIN
} from 'Constants/actionTypes';

const initialState = {
  currentDomain: {},
  domainList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_DOMAIN: {
      return { ...state, currentDomain: action.payload };
    }
    case ADD_TO_DOMAIN_LIST:
      return {
        ...state,
        domainList: state.domainList.concat(action.domain)
      };
    case UPDATE_DOMAIN_LIST: {
      return {
        ...state,
        domainList: action.payload.newDomainList
      };
    }
    default:
      return state;
  }
};
