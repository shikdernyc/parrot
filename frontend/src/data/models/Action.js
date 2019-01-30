import { actionSchema } from 'Data/models/Schemas';
import { get, post, put, remove } from 'Services/server';
import { DOMAIN_ROUTE, ACTION_ROUTE } from 'Constants/app';

export async function create (schema) {
  try {
    const item = await post(ACTION_ROUTE, schema);
    return item['data'];
  } catch (error) {
    throw error;
  }
}

export async function getAll (domainID) {
  try {
    const items = await get(`${DOMAIN_ROUTE}/${domainID}/${ACTION_ROUTE}`);
    return items['data'];
  } catch (error) {
    throw error;
  }
}

export async function findById (id) {
  try {
    const item = await get(`${ACTION_ROUTE}/${id}`);
    return item['data'];
  } catch (error) {
    throw error;
  }
}

export async function updateById (action) {
  try {
    const item = await put(`${ACTION_ROUTE}/${action.id}`, action);
    return item['data'];
  } catch (error) {
    throw error;
  }
}

export async function deleteById (action) {
  try {
    const item = await remove(`${ACTION_ROUTE}/${action._id}`);
    return item['data'];
  } catch (error) {
    throw error;
  }
}
