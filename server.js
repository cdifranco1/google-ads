const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json());
server.use(cors());

const port = '8000';

const campaigns = require('./data')

console.log(campaigns)

server.get('/', (req, res) => {
  res.status(200).json(campaigns)
})

server.post('/campaigns', (req, res) => {
  res.status(200).json(campaigns)
})


server.listen(port, () => console.log('Listening on port 8000.'))