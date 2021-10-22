const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Filme = require('../models/Filme');

const connection = new Sequelize(dbConfig);

Filme.init(connection);

module.exports = connection;

