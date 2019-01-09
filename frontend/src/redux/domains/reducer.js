import { ADD_TO_DOMAIN_LIST } from 'Constants/actionTypes';

// TEMP Code

let counter = 0;

function createDomainItem (domainName, enabled, threshold) {
  return {
    id: counter++,
    domainName,
    enabled,
    threshold
  };
}

function createDomainList () {
  let domainList = [];
  for (let i = 0; i < 10; i++) {
    domainList.push(createDomainItem(`Domain ${i}`, i % 2 === 0, 50));
  }
  return domainList;
}

const initialState = {
  domainList: [
    ...createDomainList()
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DOMAIN_LIST:
      return {
        ...state,
        domainList: [...state.domainList, action.domain]
      };
    default:
      return state;
  }
};
