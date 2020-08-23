"use strict";

var http = require('http');

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var path = require('path'); // const routerStudent = require("./router/student")


var HomeRouter = require("./router/home/HomeRouter");

var StudentRouter = require("./router/student/StudentRouter");

var AssesmentRouter = require("./router/assesment/AssesmentRouter");

app.use(bodyParser.urlencoded({
  extended: false
}));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express["static"](path.join(__dirname, 'public')));
app.use(HomeRouter);
app.use(StudentRouter);
app.use(AssesmentRouter);
var server = http.createServer(app);
server.listen(3000);