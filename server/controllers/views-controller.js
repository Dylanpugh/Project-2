const express  = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('home', { user: req.user }));

router.get('/register', (req, res) => res.render('home', { user: req.user }));
router.get('/survey', (req, res) => res.render('survey', { user: req.user }));
router.get('/movies', (req, res) => res.render('index', { user: req.user }));



module.exports = router;