require('dotenv').config();
const port = process.env.PORT;
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
        return console.log("connected to DB");
    } catch (err) {
        console.log(err);
      
        return console.log("Issues connecting to db " + err.messsage);
    }
};

const appStarter = (port) => {
    console.log(`connected on port ${port}`);
    connectToDB();
}

module.exports = appStarter;
