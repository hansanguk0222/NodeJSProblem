const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
    //이름, 이메일, 비밀번호, 학교, 나이, 닉네임
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    hashedPassword: {type: String , require: true},
    school: {type: String, require: true},
    age: {type: Number, require: true},
    nickname: {type: String, require: true},
});

module.exports = mongoose.model('user', userSchema);
