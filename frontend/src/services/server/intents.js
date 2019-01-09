const createIntent = (id, name, domain, examples) => {
  return {
    id,
    name,
    domain,
    examples
  };
};

export const getAllIntents = () => {
  let intentList = [];
  let counter = 0;
  for (let i = 0; i < 10; i++) {
    intentList.push(createIntent(counter++, `Intent ${i}`, 'Example Domain', 24));
  }
  return intentList;
};
