import {
  SET_STORY_LIST_DOMAIN,
  UPDATE_STORY_LIST,
  CREATE_STORY,
  ADD_TO_STORY_LIST,
  SET_CURRENT_STORY_ID,
  UPDATE_CURRENT_STORY,
  ADD_EVENT_TO_CURRENT_STORY,
  MODIFY_CURRENT_STORY,
  ADD_INTENT_TO_STORY
} from 'Constants/actionTypes.js';

/**
 *
 * @param {String} domainID
 * @param {storySchema} storySchema
 * @param {func(story)} onSuccess
 * @param {func(error)} onFailure
 */
export function createStory (
  domainID,
  storySchema,
  onSuccess = null,
  onFailure = null
) {
  return {
    type: CREATE_STORY,
    payload: {
      domainID,
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
export function setCurrentStoryID (
  domainID,
  storyID,
  onSuccess = null,
  onFailure = null
) {
  return {
    type: SET_CURRENT_STORY_ID,
    payload: {
      domainID,
      storyID,
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

export function modifyCurrentStory (
  currentStory,
  changes,
  onSuccess = null,
  onFailure = null
) {
  return {
    type: MODIFY_CURRENT_STORY,
    payload: {
      currentStory,
      changes,
      onSuccess,
      onFailure
    }
  };
}

export function addEventToCurrentStory (
  eventType,
  event,
  currentStory,
  onSuccess = null,
  onFailure = null
) {
  // console.log(event);
  return {
    type: ADD_EVENT_TO_CURRENT_STORY,
    payload: {
      eventType,
      event,
      currentStory,
      onSuccess,
      onFailure
    }
  };
}

export function addIntentToStory (
  domainID,
  storyID,
  intentSchema,
  onSuccess = null,
  onFailure = null
) {
  return {
    type: ADD_INTENT_TO_STORY,
    payload: {
      domainID,
      storyID,
      intentSchema,
      onSuccess,
      onFailure
    }
  };
}
