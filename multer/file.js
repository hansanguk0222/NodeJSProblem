const express = require('express');
const multer = require('multer');
const http = require('http');
const static = require('serve-static');
const path = require('path');

const app = express();
const router = express.Router();

app.use('/views', static(path.join(__dirname, 'views')));
app.use('/', router);

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

let upload = multer({storage: storage});

router.route('/upload').post(upload.single('user_file'), (req, res) => {
    res.writeHead('200', {'Content-Type':'text/html; charset=utf-8'});
    res.write('<p>Finished Upload</p>');
    res.write(`<a href='../views/home.html'>홈으로 이동</a>`);
    res.end();
});

http.createServer(app).listen(8080, () => {
    console.log('8080번 대기 중')
});

// module.exports = router;
