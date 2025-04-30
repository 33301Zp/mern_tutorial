import mongoose from "mongoose";
import tutorialModel from "./tutorial.model.js"; 

const db = {};
db.mongoose = mongoose;
db.url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`; 
db.tutorials = tutorialModel(mongoose);

export default db;