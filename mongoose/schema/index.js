const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        mongoose.connect('mongodb://localhost:27017/CRUD');
    }

    connect();
    mongoose.connection.on('error', () => {
        console.error('error');
    });

    mongoose.connection.on('disconnected', () => {
        console.error('재연결을 시도 중입니다.');
        connect();
    });
    require('./user.js');
    require('./userPost.js');
};