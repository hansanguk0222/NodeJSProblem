const express = require('express');
const static = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/show', static(path.join(__dirname, 'show')));
app.use('/', router);

router.route('/').get((req, res) => {
    console.log('/ 실행');
    res.statusCode = 302;
    res.setHeader('Location', './show/index.html');
    res.end();
});

module.exports = router;
