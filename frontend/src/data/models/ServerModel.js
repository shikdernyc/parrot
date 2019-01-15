import { get, post, put, remove } from 'Services/server';

export async function create (baseRoute, schema) {
  try {
    const item = await post(baseRoute, schema);
    return item['data'];
  } catch (error) {
    throw error;
  }
}

export async function getAll (baseRoute) {
  try {
    const items = await get(baseRoute);
    return items['data'];
  } catch (error) {
    throw error;
  }
}

export async function findById (baseRoute, id) {
  try {
    const item = await get(`${baseRoute}/${id}`);
    return item['data'];
  } catch (error) {
    throw error;
  }
}

export async function editById (baseRoute, id, changes) {
  try {
    return await put(`${baseRoute}/${id}`, changes);
  } catch (error) {
    throw error;
  }
}

export async function deleteById (baseRoute, id) {
  try {
    return await remove(`${baseRoute}/${id}`);
  } catch (error) {
    throw error;
  }
}
