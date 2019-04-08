const mongoose = require('mongoose');
const HostelModel = require('../database-mongodb/hostel.js');

const mongoUri = 'mongodb://localhost/dashaustelles';


describe('correct document count for hostels', () => {
  beforeEach(() => mongoose.connect(mongoUri));
  afterEach(() => mongoose.disconnect());

  test('documents populated in db match my seeding count', (done) => {
    HostelModel.distinct('name')
      .exec((err, results) => {
        expect(results.length).toEqual(3);
        done();
      });
  });
});
