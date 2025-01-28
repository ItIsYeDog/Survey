const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');
const auth = require('../middleware/auth');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/survey', (req, res) => {
    res.render('survey');
});

router.get('/ferdig', (req, res) => {
    res.render('pages/finish');
});

router.post('/survey/demographics', (req, res) => {
    req.session.demographics = {
        gender: req.body.gender,
        age: req.body.age
    };
    res.redirect('/survey/page1');
});

router.get('/survey/page1', (req, res) => {
    if (!req.session.demographics) {
        return res.redirect('/survey');
    }
    res.render('pages/page1');
});

router.post('/survey/page1', (req, res) => {
    req.session.page1 = req.body;
    res.redirect('/survey/page2');
});

router.get('/survey/page2', (req, res) => {
    if (!req.session.page1) {
        return res.redirect('/survey/page1');
    }
    res.render('pages/page2');
});

router.post('/survey/page2', (req, res) => {
    req.session.page2 = req.body;
    res.redirect('/survey/page3');
});

router.get('/survey/page3', (req, res) => {
    if (!req.session.page2) {
        return res.redirect('/survey/page2');
    }
    res.render('pages/page3');
});

router.post('/survey/page3', surveyController.submitSurvey);

router.get('/admin/login', (req, res) => {
    res.render('admin-login');
});

router.post('/admin/login', (req, res) => {
    const { username, password } = req.body;
    if (username === process.env.ADMIN_USERNAME && 
        password === process.env.ADMIN_PASSWORD) {
        req.session.isAuthenticated = true;
        res.redirect('/results');
    } else {
        res.redirect('/admin/login');
    }
});

router.post('/admin/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/admin/login');
});

router.get('/results', auth, surveyController.getAllSurveys);

module.exports = router;