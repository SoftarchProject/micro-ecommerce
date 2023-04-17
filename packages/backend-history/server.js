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
app.use(jsonParser)

const historySchema = new mongoose.Schema({
    // Define the schema fields here
    // For example:
    name: String,
    price: String,
    totalPrice: Number
});

const History = mongoose.model('History', historySchema);

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
                    // Check if the item already exists in the 'History' collection
                    const existingItem = await History.findOne({ name });

                    if (existingItem) {
                        // Return an error response if the item already exists
                        return res.status(400).json({ error: 'Item already exists in History collection' });
                    }

                    // Create a new History instance with the request body data
                    const newHistoryItem = new History({
                        name, price, totalPrice
                    });

                    // Save the new document to the 'History' collection
                    await newHistoryItem.save();

                    // Return a success response
                    res.json({ message: 'Item inserted successfully into History collection' });
                } catch (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Failed to insert item into History collection' });
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