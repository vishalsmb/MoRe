const express = require('express');
const bot = require('./bot.js');
require('dotenv').config();

const app = express();
const port =  3978;

app.post('/api/messages',bot.connector('*').listen());

app.listen(port, () => console.log('Listening on port '+ port));


