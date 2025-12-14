
require('dotenv').config();

const apiKey = process.env.API_KEY;

const auth = (req, res, next) => {
  const providedApiKey = req.headers['x-api-key'];
  if (providedApiKey === apiKey) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = auth;
