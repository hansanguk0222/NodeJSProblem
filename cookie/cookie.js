const express = require('express');
const http = require('http');
const bodyparser = require('body-parser');
const static = require('serve-static');
const path = require('path')
const url = require('url');
const cookie = require('cookie-parser')

const app = express();
const router = express.Router();

var session = null;

app.use(bodyparser.urlencoded({ extended: false }))

app.use(bodyparser.json())

app.use('/show', static(path.join(__dirname, 'show')));

app.use('/', router);

router.route('/login').post((req, res) => {
    console.log('/login 처리함');
    const content = req.body.name;
    if(!session) {
        session = {
            'name': content,
            'expires': new Date(Date.now() + 600000),
            'httpOnly' : true
        }
        res.cookie('name', content, {
            expires: new Date(Date.now() + 600000),
            httpOnly: true,
        });
        res.end(content);
    }
    else {
        res.end('Login had already');
    }
});


http.createServer(app).listen(3005, () => {
    console.log('3005번에서 대기 중')
});



