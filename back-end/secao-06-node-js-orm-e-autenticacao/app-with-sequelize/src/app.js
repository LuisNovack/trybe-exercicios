// src/app.js

const express = require('express');

const User = require('./controller/user.controller');

const app = express();

app.use(express.json());

app.get('/user', User.getAll);

module.exports = app;