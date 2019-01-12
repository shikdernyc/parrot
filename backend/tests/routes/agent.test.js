/* global app, expect */
const Agent = require('../../models/Agent');

const agt1 = {
  agentName: 'agent_1',
  description: 'agent_1',
  language: 'EN',
  timezone: '12',
  useWebhook: false,
  usePostFormat: false,
  domainClassifierThreshold: 5,
  fallbackResponses: ['hello', 'hi'],
  status: 'test',
  lastTraining: Date.now(),
  extraTrainingData: false,
  enableModelsPerDomain: true,
  model: 'test'
};

const agt2 = {
  agentName: 'agent_2',
  description: 'agent_2',
  language: 'EN',
  timezone: '12',
  useWebhook: false,
  usePostFormat: false,
  domainClassifierThreshold: 5,
  fallbackResponses: ['hello', 'hi'],
  status: 'test',
  lastTraining: Date.now(),
  extraTrainingData: false,
  enableModelsPerDomain: true,
  model: 'test'
};

const exclude = ['_id', '__v', 'createTimestamp', 'lastTraining'];

describe('Test agent route', () => {
  let agr1Id;
  let agr2Id;
  it('0 agent in the mongodb', async () => {
    const cnt = await Agent.estimatedDocumentCount();
    expect(cnt).to.equal(0);
  });

  it('create agents', (done) => {
    app.post('/agents')
      .set('Accept', 'application/json')
      .send(agt1)
      .expect(201)
      .end(function (err, res) {
        if (err) throw err;
        expect(res.body).excluding(exclude).to.deep.equal(agt1);
        agr1Id = res.body._id;
      });
    app.post('/agents')
      .set('Accept', 'application/json')
      .send(agt2)
      .expect(201)
      .end(function (err, res) {
        if (err) throw err;
        agr2Id = res.body._id;
        done();
      });
  });

  it('retrieve agents', (done) => {
    app.get('/agents')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        expect(res.body[0]).excluding(exclude).to.deep.equal(agt2);
        expect(res.body[1]).excluding(exclude).to.deep.equal(agt1);
        done();
      });
  });

  // it('update agents', (done) => {
  //   app.get('/agents')
  //     .expect(200)
  //     .end(function (err, res) {
  //       if (err) throw err;
  //       expect(res.body[0]).excluding(exclude).to.deep.equal(agt2);
  //       expect(res.body[1]).excluding(exclude).to.deep.equal(agt1);
  //       done();
  //     });
  // });

  it('delete agents', (done) => {
    app.delete('/agents/' + agr1Id)
      .expect(204)
      .end(function (err, res) {
        if (err) throw err;
      });
    app.delete('/agents/' + agr2Id)
      .expect(204)
      .end(function (err, res) {
        if (err) throw err;
        done();
      });
  });
});
