const expect = require('chai').expect;
const Agent = require('../../models/Agent');

describe('find domain', () => {
  it('0', async () => {
    const cnt = await Agent.estimatedDocumentCount();
    expect(cnt).to.equal(0);
  });
});
