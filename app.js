
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');



// const routerStudent = require("./router/student")
const HomeRouter = require("./router/home/HomeRouter");
const StudentRouter = require("./router/student/StudentRouter");
const AssesmentRouter = require("./router/assesment/AssesmentRouter");


app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname,'public')));
app.use(HomeRouter);
app.use(StudentRouter);
app.use(AssesmentRouter);



const server = http.createServer(app);
server.listen(3000);