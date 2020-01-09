const express = require('express');
const bodyParser = require('body-parser');
const second = require('./second.js');

const app = express();
const router = express.Router();

app.use('/', router);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

router.route('/users/:id').get((req, res) => {
    console.log('/users/:id 호출');

    const loginLog = req.params['id'];

    const session = second.showSession();

    let check = false;
    session.forEach((item, index, check) => {
        console.log(item);
        if(item.name === loginLog) {
            check = true;
        }
    });
    
    if(check) {
        res.send(`${req.params}는 로그인한 흔적이 있습니다.`);
    }
    else {
        res.send('로그인 한 기록이 없습니다.');
    }
});

module.exports = router;
