const express = require('express');
const crypto = require('crypto');
const User = require('../schema/user.js');

const app = exrpess();
const router = express.Router();

app.use('/', router);

function makePassword(password) {
    const todayRand = Math.round((new Date().valueOf() * Math.random()));
    password = crypto.createHmac('sha512', todayRand).update(password).digest('hex');
    return password;
}

router.route('/join-user').post(async (req, res) => {
    try {
        //이름, 이메일, 비밀번호, 학교, 나이, 닉네임
        const password = makePassword(req.body.password);
        const user = await User({
            name: req.body.name,
            email: req.body.email,
            hashedPassword: password,
            school: req.body.school,
            age: req.body.age,
            nickname: req.body.nickname
        });
        user.save();
    }
    catch(err) {
        throw err;
    }
});

router.route('/edit-user').patch(async (req, res) => {
    try {
        await User.update({'email' : req.body.email}, {'school' : req.body.school});
        await User.update({'email' : req.body.email}, {'nickname' : req.body.nickname});
        if(req.body.password != '') {   
            const password = makePassword(req.body.password);
            await User.update({'email' : req.body.email}, {'hashedPassword' : password});
        }
    }
    catch(err) {
        throw err;
    }
});

router.route('/delete-user').delete(async (req, res) => {
    try {
        await User.remove({'email' : req.body.email});
    }
    catch(err) {
        throw err;
    }
})
exports.module = router;
