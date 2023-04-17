const express = require('express')
const app = express()
const mongoDb = require('mongodb')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')

// set path
dotenv.config({ path: './.env' });

const mongoDB = process.env.MONGODB_ACCESS;

app.use(cors());

const start = async () => {
    try {
        await mongoose.connect(
            mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        ).then(() => {
            const collection = mongoose.connection.db.collection("History")

            app.get('/', (req, res, next) => {
                res.send({ data: "API for history" })
            })

            app.get('/api/history', async (req, res, next) => {
                try {
                    const documents = await collection.find({}).toArray();
                    res.json(documents);
                } catch (err) {
                    console.error(err);
                }
            })

            app.post('/api/history', async (req, res) => {
                // Extract the request body to get the data for the new document
                console.log(req.body)
                const { name, price, totalPrice } = req.body;

                try {
                    // Create a new Item instance with the request body data
                    const newItem = new Item({
                        name,
                        price,
                        totalPrice
                    });

                    // Save the new document to the 'Item' collection
                    await newItem.save();

                    // Return a success response
                    res.json({ message: 'Item inserted successfully' });
                } catch (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Failed to insert item' });
                }
            });

            app.listen(3003, () => {
                console.log("Listening port: http://localhost:3003/")
            })
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();