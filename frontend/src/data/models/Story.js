import { get, post, put } from 'Services/server.js';

const ROUTE = domainID => `domains/${domainID}/stories`;

export async function create (domainID, storySchema) {
  try {
    const route = `${ROUTE(domainID)}`;
    let story = await post(route, storySchema);
    return story['data'];
  } catch (error) {
    throw error;
  }
}

export async function getAllForDomain (domainID) {
  try {
    const route = `${ROUTE(domainID)}`;
    let stories = await get(route);
    return stories['data']['stories'];
  } catch (error) {
    throw error;
  }
}

export async function findById (domainID, storyID) {
  try {
    let story = await get(`${ROUTE(domainID)}/${storyID}`);
    return story['data'];
  } catch (error) {
    throw error;
  }
}

export async function addIntent (domainID, storyID, intentSchema) {
  try {
    let intent = await post(
      `${ROUTE(domainID)}/${storyID}/intents`,
      intentSchema
    );
    return intent['data'];
  } catch (error) {
    throw error;
  }
}

export async function addAction (domainID, storyID, actionSchema) {
  try {
    let action = await post(
      `${ROUTE(domainID)}/${storyID}/actions`,
      actionSchema
    );
    return action['data'];
  } catch (error) {
    throw error;
  }
}
