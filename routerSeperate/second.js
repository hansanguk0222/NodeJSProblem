const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use('/', router);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

let session = [];

router.route('/login').post((req, res) => {
    console.log('/login 호출');
    const name = req.body.name;
    let exp = new Date();
    exp = new Date(exp.getTime() + 1000*60*60*24*90);
    session.push({'name' : name});
    res.cookie('name', name, {
        expires: exp,
        httpOnly: true
    });
    res.send(`${name}님 환영합니다.`);
});

function showSession() {
    return session;
}

module.exports = router;
module.exports.showSession = showSession;
