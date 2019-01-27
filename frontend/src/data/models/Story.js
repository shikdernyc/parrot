import { actionList } from './Action';
import { intentList } from './Intent';
import { storySchema } from 'Data/models/Schemas';

let _id = 0;
const domainID = 0;

function createStory (story) {
  return {
    _id: String(_id++),
    ...story
  };
}

export const storyList = () => {
  let list = [];
  const actions = actionList().map(({ _id }) => _id);
  const intents = intentList().map(({ _id }) => _id);
  const sequence = [];

  for (let i = 0; i < 10; i++) {
    list.push(
      createStory(
        storySchema(
          String(domainID),
          'Example Story 1',
          intents,
          actions,
          sequence
        )
      )
    );
  }
  return list;
};

export async function create (schema) {
  return createStory(schema);
}

export async function getAll () {
  return storyList();
}

export async function findById (id) {
  return storyList().find(({ _id }) => _id === id);
}
