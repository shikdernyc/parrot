import {
  UPDATE_INTENT_LIST,
  ADD_TO_INTENT_LIST,
  UPDATE_CURRENT_INTENT,
  DELETE_INTENT_FROM_LIST
} from 'Constants/actionTypes.js';

const initialState = {
  intentList: [],
  currentIntent: {}
};

export default (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case UPDATE_INTENT_LIST:
      return {
        ...state,
        intentList: action.payload.newList
      };
    case ADD_TO_INTENT_LIST:
      return {
        ...state,
        intentList: state.intentList.concat(action.payload)
      };
    case UPDATE_CURRENT_INTENT:
      return {
        ...state,
        currentIntent: action.intent
      };
    case DELETE_INTENT_FROM_LIST:
      return {
        ...state,
        intentList: state.intentList.filter(intentItem => (intentItem._id !== action.intent._id)),
        currentIntent: null
      };
    default:
      return state;
  }
};
