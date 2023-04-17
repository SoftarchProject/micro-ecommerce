const express = require('express')
const app = express()
const mongoDb = require('mongodb')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// set path
dotenv.config({ path: './.env' });
const mongoDB = process.env.MONGODB_ACCESS;

const start = async () => {
    try {
        await mongoose.connect(
            mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        ).then(() => {
            const collection = mongoose.connection.db.collection("Item")

            app.get('/', async (req, res, next) => {
                res.send("API for Items")
            });

            app.get('/api/items', async (req, res, next) => {
                try {
                    const documents = await collection.find({}).toArray();
                    res.json(documents);
                } catch (err) {
                    console.error(err);
                }
            })

            app.listen(3002, () => {
                console.log("Listening port: http://localhost:3002/")
            })
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();