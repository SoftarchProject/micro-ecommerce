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

app.get('/', (req, res, next) => {
    res.send({ data: "API for items" })
})

app.get('/api/items', (req, res, next) => {
    mockData = {
        items: [
            { name: "Tree1", price: "60", img: "https://cdn.pixabay.com/photo/2014/12/22/00/07/tree-576847__480.png", type: "Standing tree" },
            { name: "Tree2", price: "32", img: "https://cdn.pixabay.com/photo/2014/12/22/00/07/tree-576847__480.png", type: "Standing tree" }
        ]
    }
    res.json(mockData)
    console.log("Get items list")
})


const start = async () => {
    try {
        await mongoose.connect(
            mongoDB
        );
        app.listen(3002, () => {
            console.log("Listening port: http://localhost:3002/")
        })
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();