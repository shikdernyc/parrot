import {
  UPDATE_INTENT_LIST,
  ADD_TO_INTENT_LIST
} from 'Constants/actionTypes.js';

const initialState = {
  intentList: [],
  currentIntent: {}
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_INTENT_LIST:
      return {
        ...state,
        intentList: action.payload.newList
      };
    case ADD_TO_INTENT_LIST:
      return {
        ...state,
        intentList: [action.payload.newIntent, ...state.intentList]
      };
    default:
      return state;
  }
};
