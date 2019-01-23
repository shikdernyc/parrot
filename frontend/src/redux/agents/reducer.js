import {
  UPDATE_AGENT_LIST,
  UPDATE_CURRENT_AGENT,
  CREATE_AGENT_SUCCEEDED,
  CREATE_AGENT_FAILED
} from 'Constants/actionTypes.js';

const initialState = {
  currentAgent: {},
  agentList: []
};

export default (state = initialState, action) => {
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
        currentAgent: action.payload
      };
    case UPDATE_CURRENT_AGENT:
      return {
        ...state,
        currentAgent: action.agent
      };
    default:
      return state;
  }
};
