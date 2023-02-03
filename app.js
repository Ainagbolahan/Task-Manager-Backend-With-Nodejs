require('dotenv').config()
const express = require("express");
const tasks = require('./routes/tasks');
const appStarter = require('./utils');

const app = express();
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./public"));

console.log('Task Manager App')
app.use("/api/v1/tasks", tasks)











app.listen(port, appStarter(port));
