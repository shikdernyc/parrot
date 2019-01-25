import { ADD_TO_DOMAIN_LIST, UPDATE_DOMAIN_LIST } from 'Constants/actionTypes';

const initialState = {
  domainList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DOMAIN_LIST:
      return {
        ...state,
        domainList: [...state.domainList, action.domain]
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
