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
