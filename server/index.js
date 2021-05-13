const express = require('express');
const path = require('path');
const cors = require('cors');
const router = require('./routes.js');

const app = express();

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(router);

module.exports = app;
