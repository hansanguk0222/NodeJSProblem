const mongoose = require('mongoose');

const { Schema } = mongoose;
const userPostSchema = new Schema({
    //닉네임, 댓글, 글, 게시물 수정 날짜
    nickname: {type: String, require: true, ref: 'user'},
    posts: {type: String, require: true},
    comment: {type: String},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('userPost', userPostSchema);
