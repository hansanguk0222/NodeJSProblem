const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const static = require('serve-static');
const path = require('path');
const Front = require('./format/restFront.js');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/', router);
app.use('/format', static(path.join(__dirname, 'format')));

let session = [];

router.route('/show').get((req, res) => {
    console.log('/show 호출');
    res.writeHead('200', {'Content-Type':'text/html; charset=utf-8'});
    console.log(session)
    session.forEach(element => {
        res.write(`<p>이름은 ${element.name}이고 생일은 ${element.age} 입니다.</p>`);
    });
    res.write(`<p><a href='/format/index.html'>로그인 화면으로 돌아가기</a></p>`);  
    res.end();
});

router.route('/login').post((req, res) => {
    console.log('/login 호출');
    const name = req.body.name;
    const age = req.body.age;
    let exp = new Date();
    exp = new Date(exp.getTime() + 1000*60*60*24*90);
    const temp = {
        'name' : name,
        'age' : age
    }
    res.cookie(session.length, name, {
            expires: exp,
            httpOnly: true
        }
    );
    session.push(temp);
    res.writeHead('200', {'Content-Type':'text/html; charset=utf-8'});
    res.write(`<p>${name}님 환영합니다. 생일은 ${age}입니다.</p>`)
    res.write(`<p><a href='/format/index.html'>로그인 화면으로 돌아가기</a></p>`);
    res.end();
});

router.route('/change').put((req, res) => {
    console.log('/change 호출');
    const name = req.body.name;
    const age = req.body.age;
    session.forEach(element => {
        if(element.name === name) {
            element.age = age;
        }        
    });
    res.end();
});

router.route('/delete').delete((req, res) => {
    console.log('/delete 호출');
    const erase = req.body.erase;
    let eraseindex;
    session.forEach((element, index, array) => {
        if(element.name === erase) {
            eraseindex = index;
        }
    });
    if(eraseindex !== -1) {
        session.splice(eraseindex, 1);
    }
})

http.createServer(app).listen(4000, () => {
    console.log('4000에서 대기 중');
})
