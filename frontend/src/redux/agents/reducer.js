import {
  UPDATE_AGENT_LIST,
  UPDATE_CURRENT_AGENT,
  ADD_TO_AGENT_LIST
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
    case ADD_TO_AGENT_LIST:
      return {
        ...state,
        agentList: state.agentList.push(action.newAget)
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
