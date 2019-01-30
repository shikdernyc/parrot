import { findById, create, getAllForDomain } from 'Data/models/Story';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  CREATE_STORY,
  SET_STORY_LIST_DOMAIN,
  SET_CURRENT_STORY_ID,
  MODIFY_CURRENT_STORY
} from 'Constants/actionTypes.js';
import {
  updateStoryList,
  addToStoryList,
  updateCurrentStory,
  setCurrentStoryID
} from './actions';

function * handleSetStoryListDomain ({ payload: { domainID } }) {
  try {
    console.log('Received');
    const stories = yield call(getAllForDomain, domainID);
    console.log(stories);
    yield put(updateStoryList(stories));
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

function * handleSetCurrentStoryId ({
  payload: { domainID, storyID, onSuccess, onFailure }
}) {
  try {
    console.log('here');
    const story = yield call(findById, domainID, storyID);
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

function * handleModifyCurrentStory ({
  payload: { currentStory, changes, onSuccess, onFailure }
}) {
  try {
    for (let change of Object.keys(changes)) {
      currentStory[change] = changes[change];
    }
    yield put(updateCurrentStory(currentStory));
    if (onSuccess) {
      onSuccess();
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
    let story = yield call(create, domainID, storySchema);
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

export function * watchCreateStory () {
  yield takeEvery(CREATE_STORY, handleCreateStory);
}

export function * watchSetStoryListDomain () {
  yield takeEvery(SET_STORY_LIST_DOMAIN, handleSetStoryListDomain);
}

export function * watchSetCurrentStoryID () {
  yield takeEvery(SET_CURRENT_STORY_ID, handleSetCurrentStoryId);
}

export function * modifyCurrentStory () {
  yield takeEvery(MODIFY_CURRENT_STORY, handleModifyCurrentStory);
}

export default function * rootSaga () {
  yield all([
    fork(watchSetStoryListDomain),
    fork(watchSetCurrentStoryID),
    fork(watchCreateStory)
    // fork(modifyCurrentStory)
  ]);
}
