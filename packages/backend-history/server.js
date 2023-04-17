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

app.get('/api/history', (req, res, next) => {
    mockData = {
        id: 1,
        items: [
            { name: "Tree1", price: "60", quantity: "2", total_prcie:"120"},
            { name: "Tree2", price: "30", quantity: "45", total_prcie:"1350"}
        ],
        date: "2023-4-12"
    }
    res.send(mockData)
    console.log("Get history list")
})

app.post('/api/history', (req, res, next) => {
    let data = req.body
    res.send("History:", data)
})

const start = async () => {
    try {
        await mongoose.connect(
            mongoDB
        );
        app.listen(3003, () => {
            console.log("Listening port: http://localhost:3003/")
        })
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();