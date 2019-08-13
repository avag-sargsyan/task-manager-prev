const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Report = require('../../models/Report');

router.get('/', (req, res) =>
    Report.findAll()
        .then(reports => {
            res.status(200).json(reports);
        })
        .catch(err => console.log(err)));

module.exports = router;