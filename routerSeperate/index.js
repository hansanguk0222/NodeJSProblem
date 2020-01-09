const first = require('./first.js');
const second = require('./second.js');
const third = require('./third.js');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const static = require('serve-static');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/show', static(path.join(__dirname, 'show')));

app.use('/process', first, second, third);

http.createServer(app).listen(8080, () => {
    console.log('8080에서 대기 중');
});
