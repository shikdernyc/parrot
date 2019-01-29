import { actionSchema } from 'Data/models/Schemas';

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

export function getAll () {
  return [
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
}

export async function findById (id) {
  return actionList.find(({ _id }) => _id === id);
}
