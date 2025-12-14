
const sequelize = require('../config/database');
const User = require('./user');
const Agent = require('./agent');
const Tool = require('./tool');

const AgentTool = sequelize.define('AgentTool', {});

User.hasMany(Agent);
Agent.belongsTo(User);

Agent.belongsToMany(Tool, { through: AgentTool });
Tool.belongsToMany(Agent, { through: AgentTool });

const db = {
  sequelize,
  User,
  Agent,
  Tool,
  AgentTool
};

module.exports = db;
