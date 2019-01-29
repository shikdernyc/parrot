import {
  ADD_TO_STORY_LIST,
  UPDATE_STORY_LIST,
  UPDATE_CURRENT_STORY
} from 'Constants/actionTypes';

const initialState = {
  currentStory: {},
  storyList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_STORY: {
      return { ...state, currentStory: action.payload.newStory };
    }
    case ADD_TO_STORY_LIST:
      return {
        ...state,
        storyList: [action.payload.newStory, ...state.storyList]
      };
    case UPDATE_STORY_LIST: {
      return {
        ...state,
        storyList: action.payload.newStoryList
      };
    }
    default:
      return state;
  }
};
