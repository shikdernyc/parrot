import { get, post, put } from 'Services/server.js';

const ROUTE = 'stories';

export async function findById (storyID) {
  try {
    let story = await get(`${ROUTE}/${storyID}`);
    return story['data'];
  } catch (error) {
    throw error;
  }
}

export async function addIntent (storyID, intentSchema) {
  try {
    let story = await post(`${ROUTE}/${storyID}/intents`, intentSchema);
    return story['data'];
  } catch (error) {
    throw error;
  }
}

export async function addAction (storyID, actionSchema) {
  try {
    let story = await post(`${ROUTE}/${storyID}/actions`, actionSchema);
    return story['data'];
  } catch (error) {
    throw error;
  }
}

export async function modifyStory (storyID, changes) {
  try {
    let story = await put(`${ROUTE}/${storyID}`, changes);
    return story['data'];
  } catch (error) {
    throw error;
  }
}
