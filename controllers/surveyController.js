const Survey = require('../models/Survey');

exports.submitSurvey = async (req, res) => {
    try {
        const survey = new Survey({
            ...req.session.demographics,
            ...req.session.page1,
            ...req.session.page2,
            ...req.body
        });
        await survey.save();
        
        req.session.demographics = null;
        req.session.page1 = null;
        req.session.page2 = null;
        
        res.redirect('/ferdig');
    } catch (error) {
        console.error('Error saving survey:', error);
        res.status(400).json({ error: 'Failed to save survey' });
    }
};

exports.getAllSurveys = async (req, res) => {
    try {
        const surveys = await Survey.find().sort({ createdAt: -1 });
        res.render('results', { surveys });
    } catch (error) {
        console.error('Error fetching surveys:', error);
        res.render('results', { surveys: [] });
    }
};