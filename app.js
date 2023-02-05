require('dotenv').config()
const express = require("express");
const { createTasks, getAllTasks, deleteTasks, getTasks, updateTasks } = require('./controllers/tasks.controller');
const tasks = require('./routes/tasks');
var cors = require('cors')
const appStarter = require('./utils');

const app = express();
const port = process.env.PORT || 3000

app.use(cors());


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./public"));

console.log('Task Manager App')
app.get("/api/v1/tasks", getAllTasks)
app.get("/api/v1/tasks/:id", getTasks)
app.post("/api/v1/tasks", createTasks)
app.patch("/api/v1/tasks/:id", updateTasks);
app.delete("/api/v1/tasks/:id", deleteTasks);

app.all("*", (req, res) => {
    return res.status(404).json({message:"Route does not exist"})
})












app.listen(port, appStarter(port));
