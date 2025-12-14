
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Agent = sequelize.define('Agent', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  persona: {
    type: DataTypes.TEXT
  },
  instructions: {
    type: DataTypes.TEXT
  },
  version: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Agent;
