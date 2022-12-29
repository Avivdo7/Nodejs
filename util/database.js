const mysql = require('mysql2');
const sqlPass = '6759979';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'marketplace',
    password: sqlPass
});

module.exports = pool.promise();