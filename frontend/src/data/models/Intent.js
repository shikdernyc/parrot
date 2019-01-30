import { get, post, put } from 'Services/server.js';

const ROUTE = domainID => `domains/${domainID}/intents`;

export async function create (domainID, intentSchema) {
  try {
    const route = `${ROUTE(domainID)}`;
    let intent = await post(route, intentSchema);
    return intent['data'];
  } catch (error) {
    throw error;
  }
}

export async function getAllForDomain (domainID) {
  try {
    const route = `${ROUTE(domainID)}`;
    let stories = await get(route);
    return stories['data']['intents'];
  } catch (error) {
    throw error;
  }
}

export async function findById (domainID, intentID) {
  try {
    let intent = await get(`${ROUTE(domainID)}/${intentID}`);
    return intent['data'];
  } catch (error) {
    throw error;
  }
}
