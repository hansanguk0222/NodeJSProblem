const express = require('express');
const userPost = require('../schema/userPost.js.js');

const app = express();
const router = express.Router();

app.use('/', router);

router.route('/show-posts/:nickname').get(async (req, res) => {
    try {
        const result = userPost.find({'nickname' : req.params.nickname});
        await console.dir(result); //이 부분 수정해야함
    }
    catch(err) {
        throw err;
    }
});

router.route('/new-post').post(async (req, res) => {
    try {
        console.log('/new-post 실행');
        const userpost = userPost({
            nickname: req.body.nickName,
            posts: req.body.post,
            comment: req.body.comment,
            createdAt: new Date()
        });
        const result = await userpost.save();
        await userPost.populate(result, {path: 'nickname'});
    }
    catch(err) {
        throw err;
    }
});

router.route('/patch-posts').patch(async (req, res) => {
    try {
        console.log('/patch-post 실행');
        let result = await userPost.update({nickname: req.body.nickName}, {posts: req.body.posts});
        result = await userPost.update({nickname: req.body.nickName}, {createdAt: new Date()});
        await res.json(result);
    }
    catch(err) {
        throw err;
    }
});

router.route('/patch-comment').patch(async (req, res) => {
    try {
        console.log('/patch-comment 실행');
        let result = await userPost.update({nickname: req.body.nickName}, {posts: req.body.comment});
        result = await userPost.update({nickname: req.body.nickName}, {createdAt: new Date()});
        await res.json(result);
    }
    catch(err) {
        throw err;
    }
});

module.exports = router;
