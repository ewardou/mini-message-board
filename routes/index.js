const express = require('express');
const getModel = require('../models/messages');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/', async function (req, res) {
    const model = await getModel();
    const messages = await model.find();
    res.render('index', { title: 'Mini Messageboard', messages });
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
    const model = await getModel();
    const instance = new model({ ...newMessage });
    instance.save();
    res.redirect('/');
});

module.exports = router;
