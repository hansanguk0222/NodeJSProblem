const userPost = require('./route/userPost.js');
const User = require('./route/user.js');
const static = require('serve-static');
const connect = require('./schema');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/', router);
app.use('/process', User, userPost);
app.use('/show', static(path.join(__dirname, 'show')));


http.createServer(app).listen(8080, () => {
    console.log('8080에서 대기 중');
    connect();
});
