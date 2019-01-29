import { actionSchema } from 'Data/models/Schemas';
import { get, post, put, remove } from 'Services/server';
import { DOMAIN_ROUTE, ACTION_ROUTE } from 'Constants/app';

let _id = 50;
const domainID = 0;

function createAction (action) {
  return {
    _id: String(_id++),
    ...action
  };
}

let actionList = [
  createAction(actionSchema(String(domainID), `Example Actions ${_id}`), [
    'Example Response 1',
    'Example Response 2'
  ]),
  createAction(actionSchema(String(domainID), `Example Actions ${_id}`), [
    'Example Response 1',
    'Example Response 2'
  ]),
  createAction(actionSchema(String(domainID), `Example Actions ${_id}`), [
    'Example Response 1',
    'Example Response 2'
  ]),
  createAction(actionSchema(String(domainID), `Example Actions ${_id}`), [
    'Example Response 1',
    'Example Response 2'
  ]),
  createAction(actionSchema(String(domainID), `Example Actions ${_id}`), [
    'Example Response 1',
    'Example Response 2'
  ])
];

export async function create (schema) {
  return createAction(schema);
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
  return actionList.find(({ _id }) => _id === id);
}
