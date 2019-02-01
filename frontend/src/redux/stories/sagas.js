import { findById, addIntent, addAction, modifyStory } from 'Data/models/Story';
import { createStory, getAllStories } from 'Data/models/Domain';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  CREATE_STORY,
  SET_STORY_LIST_DOMAIN,
  SET_CURRENT_STORY_ID,
  MODIFY_STORY,
  ADD_INTENT_TO_STORY,
  ADD_ACTION_TO_STORY
} from 'Constants/actionTypes.js';
import {
  updateStoryList,
  addToStoryList,
  updateCurrentStory,
  updateStoryInStoryList
} from './actions';

function * handleSetStoryListDomain ({ payload: { domainID } }) {
  try {
    console.log('Received');
    const stories = yield call(getAllStories, domainID);
    console.log(stories);
    yield put(updateStoryList(stories));
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

function * handleSetCurrentStoryId ({
  payload: { storyID, onSuccess, onFailure }
}) {
  try {
    const story = yield call(findById, storyID);
    yield put(updateCurrentStory(story));
    if (onSuccess) {
      onSuccess(story);
    }
  } catch (error) {
    if (onFailure) {
      onFailure(error);
    } else {
      throw error;
    }
  }
}

function * handleModifyStory ({
  payload: { storyID, changes, isCurrent, onSuccess, onFailure }
}) {
  try {
    // TOOD: Call modify
    const newStory = yield call(modifyStory, storyID, changes);
    yield put(updateStoryInStoryList(newStory._id, newStory));
    if (isCurrent) yield put(updateCurrentStory(newStory));
    if (onSuccess) {
      onSuccess(newStory);
    }
  } catch (error) {
    if (onFailure) {
      onFailure(error);
    } else {
      throw error;
    }
  }
}

function * handleCreateStory ({
  payload: { domainID, storySchema, onSuccess, onFailure }
}) {
  try {
    console.log(domainID);
    let story = yield call(createStory, domainID, storySchema);
    yield put(addToStoryList(story));
    if (onSuccess) {
      onSuccess(story);
    }
  } catch (error) {
    console.log(error);
    if (onFailure) {
      onFailure();
    } else {
      throw error;
    }
  }
}

function * handleAddIntentToStory ({
  payload: { storyID, intentSchema, onSuccess, onFailure }
}) {
  try {
    let story = yield call(addIntent, storyID, intentSchema);
    yield put(updateCurrentStory(story));
    if (onSuccess) {
      onSuccess(story);
    }
  } catch (error) {
    if (onFailure) {
      onFailure(error);
    } else {
      throw error;
    }
  }
}

function * handleAddActionToStory ({
  payload: { storyID, actionSchema, onSuccess, onFailure }
}) {
  try {
    let story = yield call(addAction, storyID, actionSchema);
    yield put(updateCurrentStory(story));
    if (onSuccess) {
      onSuccess(story);
    }
  } catch (error) {
    if (onFailure) {
      onFailure(error);
    } else {
      throw error;
    }
  }
}

export function * watchCreateStory () {
  yield takeEvery(CREATE_STORY, handleCreateStory);
}

export function * watchSetStoryListDomain () {
  yield takeEvery(SET_STORY_LIST_DOMAIN, handleSetStoryListDomain);
}

export function * watchSetCurrentStoryID () {
  yield takeEvery(SET_CURRENT_STORY_ID, handleSetCurrentStoryId);
}

export function * watchModifyStory () {
  yield takeEvery(MODIFY_STORY, handleModifyStory);
}

export function * watchAddIntentToStory () {
  yield takeEvery(ADD_INTENT_TO_STORY, handleAddIntentToStory);
}
export function * watchAddActionToStory () {
  yield takeEvery(ADD_ACTION_TO_STORY, handleAddActionToStory);
}

export default function * rootSaga () {
  yield all([
    fork(watchSetStoryListDomain),
    fork(watchSetCurrentStoryID),
    fork(watchCreateStory),
    fork(watchAddIntentToStory),
    fork(watchAddActionToStory),
    fork(watchModifyStory)
  ]);
}
