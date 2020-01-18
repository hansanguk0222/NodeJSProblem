const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const router = express.Router();

let receipt = [];

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', router);

app.route('/minsu').get((req, res) => {
    console.log('/minsu 실행중');
    receipt.push({'음식' : '짜장면', '가격' : 5000});
    res.render('index', {title: '민수', message: '짜장면, 5000원'});
});

app.route('/donghyeon').get((req, res) => {
    console.log('/donghyeon 실행중');
    receipt.push({'음식' : '짬뽕', '가격': 6000});
    res.render('index', {title: '동현', message: '짬뽕, 6000원'});
});

app.route('/total').get((req, res) => {
    console.log('/total 실행중');
    let menu = '';
    let ans = 0;
    receipt.forEach(element => {
        menu += element.음식 + ' ' + element.가격 + ' ';
        ans = ans + element.가격;
    });
    menu += `  총 가격 ${ans}`;
    res.render('index', {title: '총 내역', message: `${menu}`});
})

http.createServer(app).listen(3000, () => {
    console.log('3000번 대기 중');
})
