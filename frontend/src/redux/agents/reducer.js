import {
  UPDATE_AGENT_LIST,
  UPDATE_CURRENT_AGENT,
  CREATE_AGENT_SUCCEEDED,
  CREATE_AGENT_FAILED
} from 'Constants/actionTypes.js';

const initialState = {
  currentAgent: {},
  agentList: [],
  form_error: null
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_AGENT_LIST:
      return {
        ...state,
        agentList: action.updatedList
      };
    case CREATE_AGENT_SUCCEEDED:
      return {
        ...state,
        agentList: state.agentList.concat(action.payload),
        currentAgent: action.payload,
        form_error: null
      };
    case UPDATE_CURRENT_AGENT:
      return {
        ...state,
        currentAgent: action.agent
      };
    case CREATE_AGENT_FAILED:
      return {
        ...state,
        form_error: action.payload
      };
    default:
      return state;
  }
};
