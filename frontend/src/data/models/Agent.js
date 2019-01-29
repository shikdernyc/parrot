import { get, post, put, remove } from 'Services/server';
import { AGENT_ROUTE } from 'Constants/app';

export async function createAgent (schema) {
  try {
    const item = await post(AGENT_ROUTE, schema);
    return item['data'];
  } catch (error) {
    throw error;
  }
}

export async function create (schema) {
  return createAgent(schema);
}

export async function getAll () {
  try {
    const items = await get(AGENT_ROUTE);
    return items['data'];
  } catch (error) {
    throw error;
  }
}

export async function findById (agentID) {
  try {
    const intents = await get(`${AGENT_ROUTE}/${agentID}`);
    return intents['data'];
  } catch (error) {
    throw error;
  }
}
