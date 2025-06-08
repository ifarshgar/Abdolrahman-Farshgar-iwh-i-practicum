const dotenv = require('dotenv');
dotenv.config();

const HUBSPOT_AUTH_TOKEN = process.env.HUBSPOT_AUTH_TOKEN;
const MODE = process.env.MODE;

module.exports = { HUBSPOT_AUTH_TOKEN, MODE };
