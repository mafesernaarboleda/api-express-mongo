/**
 * @author Maria Fernanda Serna
 * Default specific configuration
 */

const path = require('path');
const _ = require('lodash');

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let envFile = require('./development.js');

/* function requiredProcessEnv(name) {
  if (!process.env[name]) {
    throw new Error(`You must set the ${name} environment variable'`);
  }
  return process.env[name];
}*/

if (env === 'production') {
  // Register the Babel require hook
  envFile = require('./production.js');
}

// All configurations will extend these options
// ============================================
const all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 3000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: '4p1-h0t3l-secret!!*%&',
  },

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true,
      },
      useMongoClient: true,
      poolSize: 2,
    },
  },
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(all, envFile || {});
