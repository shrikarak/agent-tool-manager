
const { Tool, Agent } = require('../models');
const { Op } = require('sequelize');

exports.getAllTools = async (req, res) => {
  try {
    const { search } = req.query;
    const where = {};
    if (search) {
      where[Op.or] = [
        { name: { [Op.iLike]: `%${search}%` } },
        { description: { [Op.iLike]: `%${search}%` } }
      ];
    }
    const tools = await Tool.findAll({ where, include: Agent });
    res.json(tools);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getToolById = async (req, res) => {
  try {
    const tool = await Tool.findByPk(req.params.id, { include: Agent });
    if (tool) {
      res.json(tool);
    } else {
      res.status(404).json({ error: 'Tool not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTool = async (req, res) => {
  try {
    const { name, description, usage_examples, success_criteria, agentIds } = req.body;
    const tool = await Tool.create({ name, description, usage_examples, success_criteria });
    if (agentIds && agentIds.length > 0) {
      await tool.addAgents(agentIds);
    }
    res.status(201).json(tool);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTool = async (req, res) => {
  try {
    const tool = await Tool.findByPk(req.params.id);
    if (tool) {
      const { name, description, usage_examples, success_criteria, agentIds } = req.body;
      await tool.update({ name, description, usage_examples, success_criteria });
      if (agentIds) {
        await tool.setAgents(agentIds);
      }
      res.json(tool);
    } else {
      res.status(404).json({ error: 'Tool not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTool = async (req, res) => {
  try {
    const tool = await Tool.findByPk(req.params.id);
    if (tool) {
      await tool.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Tool not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
