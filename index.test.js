const request = require('supertest');
const app = require('./index');  // Import your Express app

describe('Basic Routes', () => {
  it('GET / should return Hello World with 200 status', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello World');  // Adjust if the exact text is different
  });
});