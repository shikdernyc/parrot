import {
  CREATE_ACTION,
  CREATE_ACTION_SUCCEEDED,
  CREATE_ACTION_FAILED
} from 'Constants/actionTypes.js';

const initialState = {
  current_actions: [],
  form_error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACTION:
      return {
        ...state,
        current_actions: state.current_actions.concat(action.payload)
      };
    // case UPDATE_AGENT_LIST:
    //   return {
    //     ...state,
    //     agentList: action.updatedList
    //   };
    // case CREATE_AGENT_SUCCEEDED:
    //   return {
    //     ...state,
    //     agentList: state.agentList.concat(action.payload),
    //     currentAgent: action.payload,
    //     form_error: null
    //   };
    // case UPDATE_CURRENT_AGENT:
    //   return {
    //     ...state,
    //     currentAgent: action.agent
    //   };
    // case CREATE_AGENT_FAILED:
    //   return {
    //     ...state,
    //     form_error: action.payload
    //   };
    default:
      return state;
  }
};
