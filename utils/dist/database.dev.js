"use strict";

var mysql = require('mysql2');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_student'
});
module.exports = pool.promise();