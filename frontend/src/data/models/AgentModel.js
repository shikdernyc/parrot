import { get } from 'Services/server';

export const getAllDomains = async function (agentID) {
  try {
    return await get(`${PATH}/${agentID}/domains`);
  } catch (error) {
    throw `Unable to retrieve all domains`;
  }
};

export const getAllEntities = async function (agentID) {
  try {
    return await get(`${PATH}/${agentID}/entities`);
  } catch (error) {
    throw `Unable to get all entities`;
  }
};

export const getAllIntents = async function (agentID) {
  try {
    return await get(`${PATH}/${agentID}/intents`);
  } catch (error) {
    throw `Unable to get all intents`;
  }
};
