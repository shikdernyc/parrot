import { getAll as getAllActions } from './Action';
import { getAll as getAllIntents } from './Intent';
import { storySchema } from 'Data/models/Schemas';
import { EVENT_TYPE_INTENT, EVENT_TYPE_ACTION } from 'Constants/app';

let _id = 0;
const domainID = 0;

function createStory (story) {
  return {
    _id: String(_id++),
    ...story
  };
}

export function getAllForDomain (domainID) {
  return getAll();
}

const actions = getAllActions();
const intents = getAllIntents();
const sequence = [
  EVENT_TYPE_INTENT,
  EVENT_TYPE_ACTION,
  EVENT_TYPE_ACTION,
  EVENT_TYPE_ACTION,
  EVENT_TYPE_INTENT,
  EVENT_TYPE_ACTION,
  EVENT_TYPE_ACTION
];

const storyList = [
  createStory(
    storySchema(
      String(domainID),
      `Example Story ${_id}`,
      intents,
      actions,
      sequence
    )
  ),
  createStory(
    storySchema(
      String(domainID),
      `Example Story ${_id}`,
      intents,
      actions,
      sequence
    )
  ),
  createStory(
    storySchema(
      String(domainID),
      `Example Story ${_id}`,
      intents,
      actions,
      sequence
    )
  ),
  createStory(
    storySchema(
      String(domainID),
      `Example Story ${_id}`,
      intents,
      actions,
      sequence
    )
  ),
  createStory(
    storySchema(
      String(domainID),
      `Example Story ${_id}`,
      intents,
      actions,
      sequence
    )
  )
];

export async function create (schema) {
  return createStory(schema);
}

export async function getAll () {
  return storyList;
}

export async function findById (id) {
  return storyList.find(({ _id }) => _id === id);
}
