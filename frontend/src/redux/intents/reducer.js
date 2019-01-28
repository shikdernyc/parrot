import { UPDATE_INTENT_LIST } from 'Constants/actionTypes.js';

const initialState = {
  intentList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INTENT_LIST:
      return {
        ...state,
        intentList: action.payload.newList
      };
    default:
      return state;
  }
};
