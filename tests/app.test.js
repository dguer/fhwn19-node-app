const app = require('../app');
const request = require('supertest');

describe('GET /', () => {
    
    // `it` is for individual tests
    it('responds with 200', async () => {
        await request(app)
            .get('/')
            .expect(200); 
    });
})

describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  });