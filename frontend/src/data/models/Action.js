import { actionSchema } from 'Data/models/Schemas';

let _id = 0;
const domainID = 0;

function createAction (action) {
  return {
    _id: String(_id++),
    ...action
  };
}

export const actionList = () => {
  let list = [];

  for (let i = 0; i < 10; i++) {
    list.push(
      createAction(actionSchema(String(domainID), `Example Action ${i}`), [
        'Example Response 1',
        'Example Response 2'
      ])
    );
  }
  return list;
};

export async function create (schema) {
  return createAction(schema);
}

export async function getAll () {
  return actionList();
}

export async function findById (id) {
  return actionList().find(({ _id }) => _id === id);
}
