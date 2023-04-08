const express = require('express');
const messagesModel = require('../models/messages');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/', async function (req, res) {
    messagesModel
        .find()
        .then((data) =>
            res.render('index', { title: 'Mini Messageboard', messages: data })
        );
});

router.get('/new', function (req, res) {
    res.render('form');
});

router.post('/new', async function (req, res) {
    const newMessage = {
        user: req.body.author,
        text: req.body.message,
        added: new Date(),
    };
    const newDoc = new messagesModel({ ...newMessage });
    await newDoc.save();
    res.redirect('/');
});

module.exports = router;
