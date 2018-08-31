const express = require('express');
const cors = require('cors');

const apiRoutes = require('./api');

const server = express();
server.use(express.json());
server.use(cors({}));

server.use('/api', apiRoutes);

server.listen(9000, () => console.log('SERVER - Listening - PORT: 9000'));
