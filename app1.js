const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app'); // Import the express app

const expect = chai.expect;

chai.use(chaiHttp);

describe('Players API', () => {

  // Test GET all players route
  it('should get all players', done => {
    chai.request(app)
      .get('/players')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();  
      });
  });
  
  // Test GET player by ID route
  it('should get a player by ID', done => {
    const playerId = '123'; 
    chai.request(app)
      .get(`/players/${playerId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('_id').equal(playerId);
        done();
      });
  });

  // Test POST new player route
  it('should add a new player', done => {
    const newPlayer = {name: 'New Player', age: 25};
    chai.request(app)
      .post('/players')
      .send(newPlayer)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('name').equal('New Player');
        done();
      });
  });
  
  // Write more tests for PUT, DELETE and query routes
  
});
