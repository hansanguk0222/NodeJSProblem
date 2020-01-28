const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const static = require('serve-static');
const path = require('path');
const db = require('./db.js');

app.use('/page', static(path.join(__dirname, 'page')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const index = require('./routes/index.js');

app.use('/', index);

http.createServer(app).listen(3000, () => {
    console.log(3000);
    db();
})

