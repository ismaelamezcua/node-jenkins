const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('respond with Hola Mundo!', (done) => {
    request(app).get('/').expect('Hola Mundo!', done);
  });
});
