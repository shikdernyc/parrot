import {
  // CREATE_ACTION,
  CREATE_ACTION_SUCCEEDED,
  // CREATE_ACTION_FAILED,
  UPDATE_ACTION_LIST,
  UPDATE_CURRENT_ACTION,
  DELETE_ACTION_FROM_LIST
} from 'Constants/actionTypes.js';

const initialState = {
  actionList: [],
  currentAction: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACTION_LIST:
      return {
        ...state,
        actionList: action.updatedList
      };
    case CREATE_ACTION_SUCCEEDED:
      return {
        ...state,
        actionList: state.actionList.concat(action.payload)
      };
    case UPDATE_CURRENT_ACTION:
      return {
        ...state,
        currentAction: action.action
      };
    case DELETE_ACTION_FROM_LIST:
      return {
        ...state,
        actionList: state.actionList.filter(
          actionItem => (actionItem._id !== action.action._id)),
        currentAction: null
      };
    default:
      return state;
  }
};
