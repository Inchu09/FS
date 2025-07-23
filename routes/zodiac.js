const express = require('express');
const router = express.Router();
const UserAction = require('../models/UserAction');

// Save user action (like clicking on a zodiac sign)
router.post('/action', async (req, res) => {
    try {
        const { zodiacName, actionType } = req.body;

        const newAction = new UserAction({ zodiacName, actionType });
        await newAction.save();

        res.status(201).json({ message: 'Action saved' });
    } catch (err) {
        res.status(400).json({ error: 'Failed to log action' });
    }
});

module.exports = router;
