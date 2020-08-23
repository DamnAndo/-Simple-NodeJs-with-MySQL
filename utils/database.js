const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password:'',
    database: 'node_student'
});

module.exports = pool.promise();