import { get, post, put, remove } from 'Services/server';
import { DOMAIN_ROUTE } from 'Constants/app';

export async function create (schema) {
  try {
    const item = await post(DOMAIN_ROUTE, schema);
    return item['data'];
  } catch (error) {
    throw error;
  }
}

export async function findById (id) {
  try {
    const item = await get(`${DOMAIN_ROUTE}/${id}`);
    return item['data'];
  } catch (error) {
    throw error;
  }
}

export async function editById (id, changes) {
  try {
    return await put(`${DOMAIN_ROUTE}/${id}`, changes);
  } catch (error) {
    throw error;
  }
}

export async function deleteById (id) {
  try {
    return await remove(`${DOMAIN_ROUTE}/${id}`);
  } catch (error) {
    throw error;
  }
}
