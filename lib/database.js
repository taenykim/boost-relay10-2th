const mysql2 = require('mysql2/promise');
const config = require('../config/config');

const pool = mysql2.createPool(config.db_info);

module.exports = pool;