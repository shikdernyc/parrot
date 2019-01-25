import { UPDATE_INTENT_LIST } from 'Constants/actionTypes.js';

const initialState = {
  intentList: []
};

export default (state = initialState, action) => {
  console.log();
  switch (action.type) {
    case UPDATE_INTENT_LIST:
      console.log(action.payload);
      return {
        ...state,
        intentList: action.payload.newList
      };
    default:
      return state;
  }
};
