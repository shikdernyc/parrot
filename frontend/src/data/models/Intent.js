import { intentSchema } from 'Data/models/Schemas';

let _id = 0;
const domainID = 0;

function createIntent (intent) {
  return {
    _id: String(_id++),
    ...intent
  };
}

let intentList = [
  createIntent(intentSchema(String(domainID), `Example Intent ${_id}`), [
    'Example Response 1',
    'Example Response 2'
  ]),
  createIntent(intentSchema(String(domainID), `Example Intent ${_id}`), [
    'Example Response 1',
    'Example Response 2'
  ]),
  createIntent(intentSchema(String(domainID), `Example Intent ${_id}`), [
    'Example Response 1',
    'Example Response 2'
  ]),
  createIntent(intentSchema(String(domainID), `Example Intent ${_id}`), [
    'Example Response 1',
    'Example Response 2'
  ]),
  createIntent(intentSchema(String(domainID), `Example Intent ${_id}`), [
    'Example Response 1',
    'Example Response 2'
  ])
];

export async function create (schema) {
  return createIntent(schema);
}

export function getAll () {
  return intentList;
}

export async function findById (id) {
  return intentList.find(({ _id }) => _id === id);
}
