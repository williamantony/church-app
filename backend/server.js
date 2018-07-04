require('dotenv').config();
const {
  PORT,
  DBUSER,
  DBPASSWORD,
} = process.env;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const server = express();

// server.use(morgan('combined'));
server.use(cors());
server.use(bodyParser.json());

mongoose.Promise = global.Promise;

const DBPATH = `mongodb://${DBUSER}:${DBPASSWORD}@ds147890.mlab.com:47890/orgman`;
mongoose.connect(DBPATH, {}, () => {
  console.log(`Database is running`);
});

const routes = {
  Person: require('./api/Person/Person.routes'),
  User: require('./api/User/User.routes'),
};

routes.Person(server);
routes.User(server);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
