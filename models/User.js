const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
    login: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING
    },
});

module.exports = User;