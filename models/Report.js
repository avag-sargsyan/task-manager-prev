const Sequelize = require('sequelize');
const db = require('../config/database');

const Report = db.define('report', {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    estimation: {
        type: Sequelize.INTEGER
    },
    spent: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER
    },
});

module.exports = Report;