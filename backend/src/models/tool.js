
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tool = sequelize.define('Tool', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  usage_examples: {
    type: DataTypes.TEXT
  },
  success_criteria: {
    type: DataTypes.TEXT
  }
});

module.exports = Tool;
