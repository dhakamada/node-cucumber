const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  env: {
    endpoint: process.env.API_URL || 'aaa'
  }
}