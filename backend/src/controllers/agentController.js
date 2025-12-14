// Copyright 2025 Shrikara Kaudambady
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const { Agent, Tool } = require('../models');
const { Op } = require('sequelize');

exports.getAllAgents = async (req, res) => {
  try {
    const { search } = req.query;
    const where = {};
    if (search) {
      where[Op.or] = [
        { name: { [Op.iLike]: `%${search}%` } },
        { description: { [Op.iLike]: `%${search}%` } }
      ];
    }
    const agents = await Agent.findAll({ where, include: Tool });
    res.json(agents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAgentById = async (req, res) => {
  try {
    const agent = await Agent.findByPk(req.params.id, { include: Tool });
    if (agent) {
      res.json(agent);
    } else {
      res.status(404).json({ error: 'Agent not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAgent = async (req, res) => {
  try {
    const { name, description, persona, instructions, version, userId, toolIds } = req.body;
    const agent = await Agent.create({ name, description, persona, instructions, version, UserId: userId });
    if (toolIds && toolIds.length > 0) {
      await agent.addTools(toolIds);
    }
    res.status(201).json(agent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAgent = async (req, res) => {
  try {
    const agent = await Agent.findByPk(req.params.id);
    if (agent) {
      const { name, description, persona, instructions, version, userId, toolIds } = req.body;
      await agent.update({ name, description, persona, instructions, version, UserId: userId });
      if (toolIds) {
        await agent.setTools(toolIds);
      }
      res.json(agent);
    } else {
      res.status(404).json({ error: 'Agent not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAgent = async (req, res) => {
  try {
    const agent = await Agent.findByPk(req.params.id);
    if (agent) {
      await agent.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Agent not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
