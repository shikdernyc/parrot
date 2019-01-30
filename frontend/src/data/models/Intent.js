import { get, post, put, remove } from 'Services/server.js';
import { INTENT_ROUTE, DOMAIN_ROUTE } from 'Constants/app';
// const ROUTE = domainID => `domains/${domainID}/intents`;

export async function create (intentSchema) {
  try {
    // const route = `${ROUTE(domainID)}`;
    let intent = await post(INTENT_ROUTE, intentSchema);
    return intent['data'];
  } catch (error) {
    throw error;
  }
}

export async function getAllForDomain (domainID) {
  try {
    // const route = `${DOMAIN_ROUTE}/${domainID}/${INTENT_ROUTE}`;
    let items = await get(`${DOMAIN_ROUTE}/${domainID}/${INTENT_ROUTE}`);
    return items['data'];
  } catch (error) {
    throw error;
  }
}

export async function findById (intentID) {
  try {
    let item = await get(`${INTENT_ROUTE}/${intentID}`);
    return item['data'];
  } catch (error) {
    throw error;
  }
}

export async function updateById (intent) {
  console.log(intent);
  try {
    const item = await put(`${INTENT_ROUTE}/${intent.id}`, intent);
    return item['data'];
  } catch (error) {
    throw error;
  }
}

export async function deleteById (intent) {
  try {
    const item = await remove(`${INTENT_ROUTE}/${intent._id}`);
    return item['data'];
  } catch (error) {
    throw error;
  }
}
