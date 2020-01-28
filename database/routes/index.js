const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const Book = require('../models/book.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', router);

//데이터 삽입
router.route('/bookinform/:id').post((req, res) => {
    console.log('/bookinform/:id 실행');
    let book = new Book();
    book.author = req.body.CreateAuthor;
    book.title = req.body.CreateTitle;
    book.cost = req.body.CreateCost;
    book.published_date = new Date();

    book.save((err) => {
        if(err) throw err;
        res.json({result : 1});
    });
});

router.route('/author/').get((req, res) => {
    console.log('/author 실행');
    Book.find({'author' : req.query.ReadfindAuthor})
        .then(book => {
            let result = [];
            book.forEach(element => {
                result = result + element.title + '\n';
            });
            res.send(result);
        })
        .catch(err => console.error(err));
});

router.route('/update').put((req, res) => {
    console.log('/update 실행');
    Book.updateOne({'title' : req.body.UpdateTitle}, {'cost' : req.body.UpdateCost})
    .then(() => {
        res.send('OK');
    })
    .catch(err => console.error(err));
});

router.route('/delete').delete((req, res) => {
    console.log('/delete 실행');
    Book.deleteOne({'title' : req.body.DeleteTitle})
    .then(() => {
        res.send(req.body.DeleteTitle);
    })
    .catch(err => console.error(err));
});

module.exports = router;
