const mongoose = requrie('mongoose');

//디비를 모듈화했을때 반환을 뭘로하지?????????????????

let database;

function connectDB() {

    const databaseURL = 'mongod://localhost:27017/multer';

    console.log('디비 연결 시도');
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseURL);
    database = mongoose.connection;

    database.on('error', console.error.bind(console, 'mongoose connection error'));
    database.on('open', () => {
        UserSchema = mongoose.Schema({
            id: {type: String, required: true},
            file: {type: String, required: true},
            filetype: {type: String, required: true}
        });

        UserModel = mongoose.model('users', UserSchema);
        console.log('UserModel 정의');
    });

    database.on('disconnected', () => {
        console.log('재 연결');
        connectDB();
    })
}

module.exports = database;
