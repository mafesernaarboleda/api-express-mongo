/**
 * @author Maria Fernanda Serna
 * Main application routes
 */

const path = require('path');
const cors = require('cors');

// Import Endpoints
const hotel = require('./api/hotel');

module.exports = (app) => {
  const whitelist = [
    'http://localhost:3000',
  ];

  const corsOptions = {
    origin: whitelist,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  app.use(cors(corsOptions));

  // Insert routes below
  app.use('/api/hotels', hotel);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.send('puta');
    });
};
