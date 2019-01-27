import { agentSchema } from 'Data/models/Schemas';

let _id = 0;

function createAgent (agent) {
  return {
    _id: String(_id++),
    ...agent
  };
}

let agentList = [
  createAgent(agentSchema('Example Agent 1', 'Example Description')),
  createAgent(agentSchema('Example Agent 2', 'Example Description')),
  createAgent(agentSchema('Example Agent 3', 'Example Description'))
];

export async function create (schema) {
  return createAgent(schema);
}

export async function getAll () {
  return agentList;
}

export async function findById (id) {
  return agentList.find(({ _id }) => _id === id);
}
