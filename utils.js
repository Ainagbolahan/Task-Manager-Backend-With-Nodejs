require('dotenv').config();
const port = process.env.PORT;
const mongoose = require("mongoose");
// const { MongoClient, ServerApiVersion } = require('mongodb');

mongoose.set('strictQuery', false);
const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true,  });
        return console.log("connected to DB");
    } catch (err) {
        console.log(err);
      
        return console.log("Issues connecting to db " + err.messsage);
    }
};





// const connectToAtlas = async () => {
//     const client = await new MongoClient(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// }


const appStarter = (port) => {
    console.log(`connected on port ${port}`);
    connectToDB();
}

module.exports = appStarter;
