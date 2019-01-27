import { intentSchema } from 'Data/models/Schemas';

let _id = 0;
const domainID = 0;

function createIntent (intent) {
  return {
    _id: String(_id++),
    ...intent
  };
}

export const intentList = () => {
  let list = [];

  for (let i = 0; i < 10; i++) {
    list.push(
      createIntent(intentSchema(String(domainID), `Example Intent ${i}`), [
        'Example Response 1',
        'Example Response 2'
      ])
    );
  }
  return list;
};

export async function create (schema) {
  return createIntent(schema);
}

export async function getAll () {
  return intentList();
}

export async function findById (id) {
  return intentList().find(({ _id }) => _id === id);
}
