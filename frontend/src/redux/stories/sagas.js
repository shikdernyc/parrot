import { findById, getAll, create, getAllForDomain } from 'Data/models/Story';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  SET_STORY_LIST_DOMAIN,
  CREATE_STORY,
  SET_CURRENT_STORY_ID,
  MODIFY_CURRENT_STORY
} from 'Constants/actionTypes.js';
import { updateStoryList, addToStoryList, updateCurrentStory } from './actions';

function * handleCreateStory ({
  payload: { storySchema, onSuccess, onFailure }
}) {
  try {
    const story = yield call(create, storySchema);
    yield put(addToStoryList(story));
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

function * handleSetStoryListDomain ({ payload: { domainID } }) {
  try {
    const stories = yield call(getAllForDomain, domainID);
    yield put(updateStoryList(stories));
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

function * handleSetCurrentStoryId ({ payload: { id, onSuccess, onFailure } }) {
  try {
    const story = yield call(findById, id);
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
    console.log(currentStory);
    for (let change of Object.keys(changes)) {
      currentStory[change] = changes[change];
    }
    console.log(currentStory);
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
    fork(watchCreateStory),
    fork(watchSetStoryListDomain),
    fork(watchSetCurrentStoryID),
    fork(modifyCurrentStory)
  ]);
}
