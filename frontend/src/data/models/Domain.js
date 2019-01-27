import { get, post, put, remove } from 'Services/server';
import { DOMAIN_ROUTE } from 'Constants/app';

import { domainSchema } from 'Data/models/Schemas';

let _id = 0;
const agentID = '5c4919c42dba7c5f177fdbfd';

function createDomain (domain) {
  return {
    _id: String(_id++),
    ...domain
  };
}

let domainList = [
  createDomain(domainSchema(agentID, 'Example Domain 1')),
  createDomain(domainSchema(agentID, 'Example Domain 2')),
  createDomain(domainSchema(agentID, 'Example Domain 3'))
];

export async function getAllDomains (agentID) {
  return domainList;
}

export async function create (schema) {
  return createDomain(schema);
}

export async function findById (id) {
  return domainList.find(({ _id }) => _id === id);
}
