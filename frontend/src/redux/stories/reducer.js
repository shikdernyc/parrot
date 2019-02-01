import {
  ADD_TO_STORY_LIST,
  UPDATE_STORY_LIST,
  UPDATE_CURRENT_STORY,
  UPDATE_STORY_IN_STORY_LIST
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
    case UPDATE_STORY_IN_STORY_LIST: {
      const storyIndex = state.storyList.findIndex(
        story => story._id === action.payload.storyID
      );
      const newStoryList = [...state.storyList];
      newStoryList[storyIndex] = action.payload.newStory;
      return {
        ...state,
        storyList: newStoryList
      };
    }
    default:
      return state;
  }
};
