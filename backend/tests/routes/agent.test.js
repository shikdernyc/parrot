const expect = require('chai').expect;
const Agent = require('../../models/Agent');

describe('Test agent route', () => {
  it('0 agent in the mongodb', async () => {
    const cnt = await Agent.estimatedDocumentCount();
    expect(cnt).to.equal(0);
  });

  it('create agents', async () => {
  });
});
