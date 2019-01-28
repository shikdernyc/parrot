import {
  SET_STORY_LIST_DOMAIN,
  UPDATE_STORY_LIST,
  CREATE_STORY,
  ADD_TO_STORY_LIST,
  SET_CURRENT_STORY_ID,
  UPDATE_CURRENT_STORY
} from 'Constants/actionTypes.js';

/**
 *
 * @param {storySchema} storySchema
 * @param {func(story)} onSuccess
 * @param {func(error)} onFailure
 */
export function createStory (storySchema, onSuccess = null, onFailure = null) {
  return {
    type: CREATE_STORY,
    payload: {
      storySchema,
      onSuccess,
      onFailure
    }
  };
}

/**
 *
 * @param {string} id
 * @param {func} onSuccess
 * @param {func(error)} onFailure
 */
export function setCurrentStoryID (id, onSuccess = null, onFailure = null) {
  return {
    type: SET_CURRENT_STORY_ID,
    payload: {
      id,
      onSuccess,
      onFailure
    }
  };
}

export function updateCurrentStory (newStory) {
  return {
    type: UPDATE_CURRENT_STORY,
    payload: {
      newStory
    }
  };
}

export function setStoryListDomain (domainID) {
  return {
    type: SET_STORY_LIST_DOMAIN,
    payload: {
      domainID
    }
  };
}

export function updateStoryList (newStoryList) {
  return {
    type: UPDATE_STORY_LIST,
    payload: {
      newStoryList
    }
  };
}

export function addToStoryList (newStory) {
  return {
    type: ADD_TO_STORY_LIST,
    payload: {
      newStory
    }
  };
}
