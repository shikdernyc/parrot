import { get, post, put, remove } from 'Services/server';
import { AGENT_ROUTE } from 'Constants/app';

export async function create (schema) {
  try {
    const item = await post(AGENT_ROUTE, schema);
    return item['data'];
  } catch (error) {
    throw error;
  }
}

export async function getAll () {
  try {
    const items = await get(AGENT_ROUTE);
    return items['data'];
  } catch (error) {
    throw error;
  }
}

export async function findById (id) {
  try {
    const item = await get(`${AGENT_ROUTE}/${id}`);
    return item['data'];
  } catch (error) {
    throw error;
  }
}

export async function editById (id, changes) {
  try {
    return await put(`${AGENT_ROUTE}/${id}`, changes);
  } catch (error) {
    throw error;
  }
}

export async function deleteById (id) {
  try {
    return await remove(`${AGENT_ROUTE}/${id}`);
  } catch (error) {
    throw error;
  }
}

export const getAllDomains = async function (agentID) {
  try {
    const domains = await get(`${AGENT_ROUTE}/${agentID}/domains`);
    return domains['data'];
  } catch (error) {
    throw error;
  }
};

export const getAllEntities = async function (agentID) {
  try {
    const entities = await get(`${AGENT_ROUTE}/${agentID}/entities`);
    return entities['data'];
  } catch (error) {
    throw error;
  }
};

export const getAllIntents = async function (agentID) {
  try {
    const intents = await get(`${AGENT_ROUTE}/${agentID}/intents`);
    return intents['data'];
  } catch (error) {
    throw error;
  }
};
