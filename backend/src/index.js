
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const agentRoutes = require('./routes/agentRoutes');
const toolRoutes = require('./routes/toolRoutes');

const auth = require('./middleware/auth');

app.use('/api/agents', auth, agentRoutes);
app.use('/api/tools', auth, toolRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the Agent and Tool Management API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
