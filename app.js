require('dotenv').config()
const express = require("express");
const appStarter = require('./utils');

const app = express();
const port = process.env.PORT



console.log('Task Manager App')










app.listen(port, appStarter(port));
